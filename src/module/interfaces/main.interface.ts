import {AuthProvider} from '../services/auth-process.service';

export interface ICredentials {
  email: string,
  password: string
}

export interface ISignUpProcess {

  signUp(name: string, credentials: ICredentials): any;
}

export interface ISignInProcess {

  onSuccessEmitter: any;
  onErrorEmitter: any;

  signInWith(provider: AuthProvider, credentials?: ICredentials): any;

  resetPassword(email: string): any;
}
