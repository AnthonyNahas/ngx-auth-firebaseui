import {AuthProvider} from '../services/auth-process.service';

export interface ISignUpProcess {

    signUp(name: string, email: string, password: string);
}

export interface ISignInProcess {

    onSuccessEmitter;
    onErrorEmitter;

    signInWith(provider: AuthProvider, email?: string, password?: string);

    resetPassword(email: string);
}