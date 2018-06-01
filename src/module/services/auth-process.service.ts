import {EventEmitter, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AngularFireAuth} from 'angularfire2/auth';
import {ISignInProcess, ISignUpProcess} from '../interfaces/main.interface';
import {FirestoreSyncService} from './firestore-sync.service';
import * as firebase from 'firebase';
// import User = firebase.User;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import UserCredential = firebase.auth.UserCredential;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import {Accounts} from '../enums';
import {User, UserInfo} from 'firebase';

export enum AuthProvider {
  ALL = 'all',
  ANONYMOUS = 'anonymous',
  EmailAndPassword = 'firebase',
  Google = 'google',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Github = 'github',
  PhoneNumber = 'phoneNumber'
}

@Injectable()
export class AuthProcessService implements ISignInProcess, ISignUpProcess {

  onSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();
  onErrorEmitter: EventEmitter<any> = new EventEmitter<any>();
  isLoading: boolean;
  emailConfirmationSent: boolean;
  emailToConfirm: string;

  constructor(public auth: AngularFireAuth,
              private _fireStoreService: FirestoreSyncService,
              private _snackBar: MatSnackBar) {
  }

  /**
   * Reset the password of the user via email
   *
   * @param email - the email to reset
   * @returns
   */
  public resetPassword(email: string) {
    return this.auth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => this.onErrorEmitter.next(error));
  }

  /**
   * General sign in mechanism to authenticate the users with a firebase project
   * using a traditional way, via username and password or by using an authentication provider
   * like google, facebook, twitter and github
   *
   * @param provider - the provider to authenticate with (google, facebook, twitter, github)
   * @param email - (optional) the email of user - used only for a traditional sign in
   * @param password - (optional) the password of user - used only for a traditional sign in
   * @returns
   */
  public async signInWith(provider: AuthProvider, email?: string, password?: string) {
    try {
      this.isLoading = true;
      let signInResult: UserCredential;

      switch (provider) {
        case AuthProvider.ANONYMOUS:
          signInResult = await this.auth.auth.signInAnonymously() as UserCredential;
          break;

        case AuthProvider.EmailAndPassword:
          signInResult = await this.auth.auth.signInWithEmailAndPassword(email, password) as UserCredential;
          break;

        case AuthProvider.Google:
          signInResult = await this.auth.auth.signInWithPopup(new GoogleAuthProvider()) as UserCredential;
          break;

        case AuthProvider.Facebook:
          signInResult = await this.auth.auth.signInWithPopup(new FacebookAuthProvider()) as UserCredential;
          break;

        case AuthProvider.Twitter:
          signInResult = await this.auth.auth.signInWithPopup(new TwitterAuthProvider()) as UserCredential;
          break;

        case AuthProvider.Github:
          signInResult = await this.auth.auth.signInWithPopup(new GithubAuthProvider()) as UserCredential;
          break;

        default:
          throw new Error(`${AuthProvider[provider]} is not available as auth provider`);

      }
      console.log('sign in result = ', signInResult);

      await this._fireStoreService.updateUserData(this.parseUserInfo(signInResult.user));
      this._snackBar.open(`Hallo ${signInResult.user.displayName ? signInResult.user.displayName : ''}!`,
        'OK', {duration: 5000});
      this.onSuccessEmitter.next(signInResult.user);
    } catch (err) {
      console.error(err);
      this._snackBar.open(err.message, 'OK', {duration: 5000});
      this.onErrorEmitter.next(err);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Sign up new users via email and password.
   * After that the user should verify and confirm an email sent via the firebase
   *
   * @param name - the name if the new user
   * @param email - the email if the new user
   * @param password - the password if the new user
   * @returns
   */
  public async signUp(name: string, email: string, password: string) {
    try {
      this.isLoading = true;
      const userCredential: UserCredential = await this.auth.auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('onsignUp the user = ', user);
      await this._fireStoreService
        .getUserDocRefByUID(user.uid)
        .set({
          uid: user.uid,
          displayName: name,
          email: user.email,
          photoURL: user.photoURL
        } as firebase.User);

      await user.sendEmailVerification();
      const updatedProfileResult = await this.updateProfile(name, user.photoURL);
      // console.log('on update profile result -> ', updatedProfileResult);
      this.emailConfirmationSent = true;
      this.emailToConfirm = email;
      this._snackBar.open(`Hallo ${name}!`, 'OK', {duration: 10000});
      this.onSuccessEmitter.next(user);
    } catch (err) {
      console.error(err);
      this._snackBar.open(err.message, 'OK', {duration: 5000});
      this.onErrorEmitter.next(err);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Update the profile (name + photo url) of the authenticated user in the
   * firebase authentication feature (not in firestore)
   *
   * @param name - the new name of the authenticated user
   * @param photoURL - the new photo url of the authenticated user
   * @returns
   */
  public async updateProfile(name: string, photoURL: string): Promise<any> {
    return await this.auth.auth.currentUser.updateProfile({displayName: name, photoURL: photoURL});
  }

  public async deleteAccount(): Promise<any> {
    return await this.auth.auth.currentUser.delete();
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

    const user: firebase.User | null = this.auth.auth.currentUser;

    if (user.photoURL) {
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

}
