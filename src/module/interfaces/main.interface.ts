import {AuthProvider} from '../services/auth-process.service';

export interface ISignUpProcess {

  signUp(name: string, email: string, password: string): any;
}

export interface ISignInProcess {

  onSuccessEmitter: any;
  onErrorEmitter: any;

  signInWith(provider: AuthProvider, email?: string, password?: string): any;

  resetPassword(email: string): any;
}
