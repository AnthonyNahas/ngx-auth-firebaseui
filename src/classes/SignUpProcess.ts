import {ISignUpProcess} from '../interfaces';
import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SignUpProcess implements ISignUpProcess {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    constructor(public afAuth: AngularFireAuth,
                private _snackbar: MatSnackBar) {
    }

    /**
     * Sign up new users via email and password.
     * After that the user should verify and confirm an email sent via the firebase
     */
    public async signUp() {
        try {
            const user = await this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
            console.log(user);
        }
        catch (err) {
            console.error(err);
            this._snackbar.open(err.message, 'OK', {duration: 5000});
        }
    }

}
