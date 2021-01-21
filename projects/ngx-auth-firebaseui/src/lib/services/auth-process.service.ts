import '@firebase/auth';

import { EventEmitter, forwardRef, Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Accounts } from '../enums';
import { ICredentials, ISignInProcess, ISignUpProcess, NgxAuthFirebaseUIConfig } from '../interfaces';
import { NgxAuthFirebaseUIConfigToken } from '../tokens';
import { FirestoreSyncService } from './firestore-sync.service';

import UserCredential = firebase.auth.UserCredential;

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const appleAuthProvider = new firebase.auth.OAuthProvider("apple.com");
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const microsoftAuthProvider = new firebase.auth.OAuthProvider(
  "microsoft.com"
);
export const yahooAuthProvider = new firebase.auth.OAuthProvider("yahoo.com");

export enum AuthProvider {
  ALL = "all",
  ANONYMOUS = "anonymous",
  EmailAndPassword = "firebase",
  Google = "google",
  Apple = "apple",
  Facebook = "facebook",
  Twitter = "twitter",
  Github = "github",
  Microsoft = "microsoft",
  Yahoo = "yahoo",
  PhoneNumber = "phoneNumber",
}

@Injectable({
  providedIn: "root",
})
export class AuthProcessService implements ISignInProcess, ISignUpProcess {
  onSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();
  onErrorEmitter: EventEmitter<any> = new EventEmitter<any>();

  // Useful to know about auth state even between reloads.
  // Replace emailConfirmationSent and emailToConfirm.
  private _user$ = new BehaviorSubject<firebase.User | null>(null);
  get user$(): Observable<firebase.User | null> {
    return this._user$.asObservable();
  }

  /**
   * @deprecated access via user$ asynchronously instead
   */
  user: firebase.User;

  messageOnAuthSuccess: string;
  messageOnAuthError: string;

  // Legacy field that is set to true after sign up.
  // Value is lost in case of reload. The idea here is to know if we just sent a verification email.
  emailConfirmationSent: boolean;
  // Legacy filed that contain the mail to confirm. Same lifecycle than emailConfirmationSent.
  emailToConfirm: string;

  constructor(
    public afa: AngularFireAuth,
    @Inject(forwardRef(() => NgxAuthFirebaseUIConfigToken))
    public config: NgxAuthFirebaseUIConfig,
    private snackBar: MatSnackBar,
    private fireStoreService: FirestoreSyncService,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS)
    private matSnackBarConfig: MatSnackBarConfig
  ) {}

  listenToUserEvents() {
    this.afa.user.subscribe((user: firebase.User | null) => {
      this._user$.next(user);
      this.user = user;
    });
  }

  /**
   * Reset the password of the ngx-auth-firebaseui-user via email
   *
   * @param email - the email to reset
   */
  public async resetPassword(email: string): Promise<void> {
    try {
      console.log("Password reset email sent");
      return await this.afa.sendPasswordResetEmail(email);
    } catch (error) {
      return this.notifyError(error);
    }
  }

  /**
   * General sign in mechanism to authenticate the users with a firebase project
   * using a traditional way, via username and password or by using an authentication provider
   * like google, facebook, twitter and github
   *
   * @param provider - the provider to authenticate with (google, facebook, twitter, github)
   * @param credentials optional email and password
   */
  public async signInWith(provider: AuthProvider, credentials?: ICredentials) {
    try {
      let signInResult: UserCredential | any;

      switch (provider) {
        case AuthProvider.ANONYMOUS:
          signInResult = (await this.afa.signInAnonymously()) as UserCredential;
          break;

        case AuthProvider.EmailAndPassword:
          signInResult = (await this.afa.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          )) as UserCredential;
          break;

        case AuthProvider.Google:
          signInResult = (await this.afa.signInWithPopup(
            googleAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Apple:
          signInResult = (await this.afa.signInWithPopup(
            appleAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Facebook:
          signInResult = (await this.afa.signInWithPopup(
            facebookAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Twitter:
          signInResult = (await this.afa.signInWithPopup(
            twitterAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Github:
          signInResult = (await this.afa.signInWithPopup(
            githubAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Microsoft:
          signInResult = (await this.afa.signInWithPopup(
            microsoftAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Yahoo:
          signInResult = (await this.afa.signInWithPopup(
            yahooAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.PhoneNumber:
          // coming soon - see feature/sms branch
          break;

        default:
          throw new Error(
            `${AuthProvider[provider]} is not available as auth provider`
          );
      }
      await this.handleSuccess(signInResult);
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * Sign up new users via email and password.
   * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
   *
   * @param displayName - the displayName if the new ngx-auth-firebaseui-user
   * @param credentials email and password
   * @returns -
   */
  public async signUp(displayName: string, credentials: ICredentials) {
    try {
      const userCredential: UserCredential = await this.afa.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;
      await this.updateProfile(displayName, user.photoURL);

      if (this.config.enableFirestoreSync) {
        await this.fireStoreService.getUserDocRefByUID(user.uid).set({
          uid: user.uid,
          displayName,
          email: user.email,
          photoURL: user.photoURL,
        } as firebase.User);
      }

      if (this.config.enableEmailVerification) {
        await user.sendEmailVerification();
      }

      // Legacy fields
      this.emailConfirmationSent = true;
      this.emailToConfirm = credentials.email;

      await this.handleSuccess(userCredential);
    } catch (err) {
      this.handleError(err);
    }
  }

  async sendNewVerificationEmail(): Promise<void | never> {
    if (!this.user) {
      return Promise.reject(new Error("No signed in user"));
    }
    return this.user.sendEmailVerification();
  }

  async signOut() {
    try {
      await this.afa.signOut();
    } catch (error) {
      this.notifyError(error);
    }
  }

  /**
   * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
   * firebase authentication feature (not in firestore)
   *
   * @param name - the new name of the authenticated ngx-auth-firebaseui-user
   * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
   * @returns -
   */
  public updateProfile(name: string, photoURL: string): Promise<void> {
    return this.afa.currentUser.then((user: firebase.User) => {
      if (!photoURL) {
        return user.updateProfile({ displayName: name });
      } else {
        return user.updateProfile({ displayName: name, photoURL });
      }
    });
  }

  public parseUserInfo(user: firebase.User): firebase.UserInfo {
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId:
        user.providerData.length > 0 ? user.providerData[0].providerId : null,
    };
  }

  public getUserPhotoUrl(): Observable<string | null> {
    return this._user$.pipe(
      map((user: firebase.User | null) => {
        if (!user) {
          return null;
        } else if (user.photoURL) {
          return user.photoURL;
        } else if (user.emailVerified) {
          return this.getPhotoPath(Accounts.CHECK);
        } else if (user.isAnonymous) {
          return this.getPhotoPath(Accounts.OFF);
        } else {
          return this.getPhotoPath(Accounts.NONE);
        }
      })
    );
  }

  public getPhotoPath(image: string): string {
    return `assets/user/${image}.svg`;
  }

  public signInWithPhoneNumber() {
    // todo: 3.1.18
  }

  async handleSuccess(userCredential: UserCredential) {

    if(this.config.useRawUserCredential) {
      this.onSuccessEmitter.next(userCredential);
    } else {
      this.onSuccessEmitter.next(userCredential.user);
    }

    if (this.config.enableFirestoreSync) {
      try {
        await this.fireStoreService.updateUserData(
          this.parseUserInfo(userCredential.user)
        );
      } catch (e) {
        console.error(
          `Error occurred while updating user data with firestore: ${e}`
        );
      }
    }
    if (this.config.toastMessageOnAuthSuccess) {
      const fallbackMessage = `Hello ${
        userCredential.user.displayName ? userCredential.user.displayName : ""
      }!`;
      this.showToast(this.messageOnAuthSuccess || fallbackMessage);
    }
  }

  handleError(error: any) {
    this.notifyError(error);
    console.error(error);
  }

  // Refresh user info. Can be useful for instance to get latest status regarding email verification.
  reloadUserInfo() {
    return this._user$
      .pipe(take(1))
      .subscribe((user: firebase.User | null) => user && user.reload());
  }

  // Search for an error message.
  // Consumers of this library are given the possibility to provide a
  // function in case they want to instrument message based on error properties.
  getMessageOnAuthError(error: any) {
    // tslint:disable-next-line:no-bitwise
    return (
      error.toString() || "Sorry, something went wrong. Please retry later."
    );
  }

  // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
  // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
  // If that's the case, an action button is added to allow the end-user to dismiss the toast.
  showToast(message: string) {
    if (message) {
      this.snackBar.open(
        message,
        this.matSnackBarConfig.duration ? null : "OK"
      );
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
