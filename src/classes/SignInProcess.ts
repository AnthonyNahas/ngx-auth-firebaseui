import {EventEmitter, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import {ISignInProcess} from '../';

@Injectable()
export class SignInProcess implements ISignInProcess {

    email: string;
    password: string;
    onSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();
    onErrorEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor(public afAuth: AngularFireAuth,
                public snackbar: MatSnackBar) {
    }

    public resetPassword() {
    }

    /**
     * Sign in existing users via username and password
     */
    public async signIn() {
        try {
            const user = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
            console.log(user);
            this.snackbar.open(user, 'OK', {duration: 5000});
            this.onSuccessEmitter.next(user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

    public async signInWithGoogle() {
        try {
            const response = await this.afAuth.auth.signInWithPopup(new GoogleAuthProvider());
            console.log(response);
            this.snackbar.open(response, 'OK', {duration: 5000});
            this.onSuccessEmitter.next(response.user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

    public async signInWithFaceBook() {
        try {
            const response = await this.afAuth.auth.signInWithPopup(new FacebookAuthProvider());
            console.log(response);
            this.snackbar.open(response, 'OK', {duration: 5000});
            this.onSuccessEmitter.next(response.user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

    public async signInWithTwitter() {
        try {
            const response = await this.afAuth.auth.signInWithPopup(new TwitterAuthProvider());
            console.log(response);
            this.snackbar.open(response, 'OK', {duration: 5000});
            this.onSuccessEmitter.next(response.user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

    public async signInWithGithub() {
        try {
            const response = await this.afAuth.auth.signInWithPopup(new GithubAuthProvider());
            console.log(response);
            this.snackbar.open(response, 'OK', {duration: 5000});
            this.onSuccessEmitter.next(response.user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

    public signInWithPhoneNumber() {
        // todo: 3.1.18
    }

}
