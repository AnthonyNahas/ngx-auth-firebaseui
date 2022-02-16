import {AuthProvider} from '../services/auth-process.service';

export interface ICredentials {
  email: string;
  password: string;
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

export enum Theme {
  DEFAULT = 'default',
  CLASSIC = 'classic',
  STROKED = 'stroked',
  FAB = 'fab',
  MINI_FAB = 'mini-fab',
  RAISED = 'raised',
}

export enum Layout {
  ROW = 'row',
  COLUMN = 'column'
}

export const EMAIL_REGEX = new RegExp(
  [
    '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    '[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+',
    '[a-zA-Z]{2,}))$',
  ].join('')
);

// eslint-disable-next-line max-len
export const PHONE_NUMBER_REGEX = new RegExp(
  [
    '^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$',
  ].join('')
);
