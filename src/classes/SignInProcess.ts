import {ISignInProcess} from '../interfaces';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SignInProcess implements ISignInProcess {

    email: string;
    password: string;

    constructor(public afAuth: AngularFireAuth,
                private _snackbar: MatSnackBar) {
    }

    public resetPassword() {
    }

    /**
     * Sign in existing users via username and password
     */
    public signIn() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    }

}
