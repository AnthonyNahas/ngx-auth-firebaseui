import {ISignUpProcess} from '../interfaces';
import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SignInProcess} from './SignInProcess';

@Injectable()
export class SignUpProcess extends SignInProcess implements ISignUpProcess {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    constructor(public afAuth: AngularFireAuth,
                public snackbar: MatSnackBar) {
        super(afAuth, snackbar);
    }

    /**
     * Sign up new users via email and password.
     * After that the user should verify and confirm an email sent via the firebase
     */
    public async signUp() {
        try {
            const user = await this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
            console.log(user);
            this.onSuccessEmitter.next(user);
        }
        catch (err) {
            console.error(err);
            this.snackbar.open(err.message, 'OK', {duration: 5000});
            this.onErrorEmitter.next(err);
        }
    }

}
