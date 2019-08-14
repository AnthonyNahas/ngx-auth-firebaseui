import { EventEmitter, forwardRef, Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { User, UserInfo } from 'firebase/app';
import { isFunction } from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Accounts } from '../enums';
import { NgxAuthFirebaseUIConfig } from '../interfaces/config.interface';
import { ICredentials, ISignInProcess, ISignUpProcess } from '../interfaces/main.interface';
import { NgxAuthFirebaseUIConfigToken } from '../ngx-auth-firebase-u-i.module';
import { FirestoreSyncService } from './firestore-sync.service';

// import User = firebase.User;

import UserCredential = firebase.auth.UserCredential;

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const microsoftAuthProvider = new firebase.auth.OAuthProvider('microsoft.com');
export const yahooAuthProvider = new firebase.auth.OAuthProvider('yahoo.com');

export enum AuthProvider {
  ALL = 'all',
  ANONYMOUS = 'anonymous',
  EmailAndPassword = 'firebase',
  Google = 'google',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Github = 'github',
  Microsoft = 'microsoft',
  Yahoo = 'yahoo',
  PhoneNumber = 'phoneNumber'
}

export type getErrorMessageType = (error: any) => string;
export type messageOnAuthErrorType = string | getErrorMessageType;

@Injectable()
export class AuthProcessService implements ISignInProcess, ISignUpProcess {
  onSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();
  onErrorEmitter: EventEmitter<any> = new EventEmitter<any>();

  isLoading: boolean;

  // Useful to know aubout auth state even between reloads.
  // Replace emailConfirmationSent and emailToConfirm.
  user$: Observable<User>;
  user: User;

  messageOnAuthSuccess: string;
  messageOnAuthError: messageOnAuthErrorType;

  // Legacy field that is setted to true after sign up. Value is lost in case of reload. The idea here is to know if we just sent a verification email.
  emailConfirmationSent: boolean;
  // Lefacy filed that contain the mail to confirm. Same lifecyle than emailConfirmationSent.
  emailToConfirm: string;

  constructor(
    public afa: AngularFireAuth,
    @Inject(forwardRef(() => NgxAuthFirebaseUIConfigToken)) public config: NgxAuthFirebaseUIConfig,
    private _snackBar: MatSnackBar,
    private _fireStoreService: FirestoreSyncService,
    private _router: Router
  ) {}

  listenToUserEvents() {
    this.user$ = this.afa.user.pipe(
      tap(user => {
        this.user = user;
      })
    );
  }

  /**
   * Reset the password of the ngx-auth-firebaseui-user via email
   *
   * @param email - the email to reset
   * @returns
   */
  public resetPassword(email: string) {
    return this.afa.auth.sendPasswordResetEmail(email)
      .then(() => console.log('Password reset email sent'))
      .catch((error) => this.notifyError(error));
  }

  /**
   * General sign in mechanism to authenticate the users with a firebase project
   * using a traditional way, via username and password or by using an authentication provider
   * like google, facebook, twitter and github
   *
   * @param provider - the provider to authenticate with (google, facebook, twitter, github)
   * @param credentials
   * @returns
   */
  public async signInWith(provider: AuthProvider, credentials?: ICredentials) {
    try {
      this.isLoading = true;
      let signInResult: UserCredential | any;

      switch (provider) {
        case AuthProvider.ANONYMOUS:
          signInResult = await this.afa.auth.signInAnonymously() as UserCredential;
          break;

        case AuthProvider.EmailAndPassword:
          signInResult = await this.afa.auth.signInWithEmailAndPassword(credentials.email, credentials.password) as UserCredential;
          break;

        case AuthProvider.Google:
          signInResult = await this.afa.auth.signInWithPopup(googleAuthProvider) as UserCredential;
          break;

        case AuthProvider.Facebook:
          signInResult = await this.afa.auth.signInWithPopup(facebookAuthProvider) as UserCredential;
          break;

        case AuthProvider.Twitter:
          signInResult = await this.afa.auth.signInWithPopup(twitterAuthProvider) as UserCredential;
          break;

        case AuthProvider.Github:
          signInResult = await this.afa.auth.signInWithPopup(githubAuthProvider) as UserCredential;
          break;

        case AuthProvider.Microsoft:
          signInResult = await this.afa.auth.signInWithPopup(microsoftAuthProvider) as UserCredential;
          break;

        case AuthProvider.Yahoo:
          signInResult = await this.afa.auth.signInWithPopup(yahooAuthProvider) as UserCredential;
          break;

        case AuthProvider.PhoneNumber:
          // coming soon - see feature/sms branch
          break;

        default:
          throw new Error(`${AuthProvider[provider]} is not available as auth provider`);
      }
      await this.handleSuccess(signInResult);
    } catch (err) {
      this.handleError(err);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Sign up new users via email and password.
   * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
   *
   * @param displayName - the displayName if the new ngx-auth-firebaseui-user
   * @param credentials
   * @returns
   */
  public async signUp(displayName: string, credentials: ICredentials) {
    try {
      this.isLoading = true;
      const userCredential: UserCredential = await this.afa.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      const user = userCredential.user;
      await this.updateProfile(displayName, user.photoURL);

      if (this.config.enableFirestoreSync) {
        await this._fireStoreService
          .getUserDocRefByUID(user.uid)
          .set({
            uid: user.uid,
            displayName: displayName,
            email: user.email,
            photoURL: user.photoURL
          } as User);
      }

      await user.sendEmailVerification();
      // Legacy fields
      this.emailConfirmationSent = true;
      this.emailToConfirm = credentials.email;

      await this.handleSuccess(userCredential);
    } catch (err) {
      this.handleError(err);
    } finally {
      this.isLoading = false;
    }
  }

  async sendNewVerificationEmail() {
    if (!this.user) {
      return Promise.reject(new Error('No signed in user'));
    }
    try {
      this.isLoading = true;
      return this.user.sendEmailVerification();
    } finally {
      this.isLoading = false;
    }
  }

  async signOut() {
    try {
      this.isLoading = true;
      await this.afa.auth.signOut();
      this.isLoading = false;
      // if (this.config.authGuardFallbackURL) {
      //   await this._router.navigate([this.config.authGuardFallbackURL]);
      // }
    } catch (error) {
      this.isLoading = false;
      this.notifyError(error);
    }
  }

  /**
   * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
   * firebase authentication feature (not in firestore)
   *
   * @param name - the new name of the authenticated ngx-auth-firebaseui-user
   * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
   * @returns
   */
  public updateProfile(name: string, photoURL: string): Promise<any> {
    return this.afa.auth.currentUser.updateProfile({displayName: name, photoURL: photoURL});
  }

  public deleteAccount(): Promise<any> {
    return this.afa.auth.currentUser.delete();
  }

  public parseUserInfo(user: User): UserInfo {
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null
    };
  }

  public getUserPhotoUrl(): string {

    const user: firebase.User | null = this.afa.auth.currentUser;

    if (!user) {
      return;
    } else if (user.photoURL) {
      return user.photoURL;
    } else if (user.emailVerified) {
      return this.getPhotoPath(Accounts.CHECK);
    } else if (user.isAnonymous) {
      return this.getPhotoPath(Accounts.OFF);
    } else {
      return this.getPhotoPath(Accounts.NONE);
    }
  }

  public getPhotoPath(image: string) {
    return `assets/user/${image}.svg`;
  }

  public signInWithPhoneNumber() {
    // todo: 3.1.18
  }

  async handleSuccess(userCredential: UserCredential) {
    this.onSuccessEmitter.next(userCredential.user);
    if (this.config.enableFirestoreSync) {
      try {
        await this._fireStoreService.updateUserData(this.parseUserInfo(userCredential.user));
      } catch (e) {
        console.error(`Error occurred while updating user data with firestore: ${e}`);
      }
    }
    if (this.config.toastMessageOnAuthSuccess) {
      const fallbackMessage = `Hello ${userCredential.user.displayName ? userCredential.user.displayName : ''}!`;
      this.showToast(this.messageOnAuthSuccess || fallbackMessage);
    }
  }

  handleError(error: any) {
    this.notifyError(error);
    console.error(error);
  }

  // Refresh user info. Can be useful for instance to get latest status regarding email verification.
  reloadUserInfo() {
    return this.user.reload();
  }

  // Search for an error message.
  // Consumers of this library are given the possibility to provide a function in case they want to instrument message based on error properties.
  getMessageOnAuthError(error: any) {
    let message: string;
    const fallbackMessage = 'Sorry, something went wrong. Please retry later.';
    if (isFunction(this.messageOnAuthError)) {
      message = this.messageOnAuthError(error);
    } else {
      message = this.messageOnAuthError || fallbackMessage;
    }
    return message;
  }

  // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
  showToast(message: string) {
    if (message) {
      this._snackBar.open(message);
    }
  }

  showErrorToast(error: any) {
    if (this.config.toastMessageOnAuthError) {
      this.showToast(this.getMessageOnAuthError(error));
    }
  }

  notifyError(error: any) {
    this.onErrorEmitter.emit(error);
    this.showErrorToast(error);
  }

}
