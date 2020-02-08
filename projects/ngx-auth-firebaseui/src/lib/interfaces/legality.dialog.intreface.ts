import {AuthProvider} from '../..';
import {ICredentials} from './main.interface';

export interface LegalityDialogParams {
  tosUrl: string;
  privacyPolicyUrl: string;
  authProvider: AuthProvider;
  credentials?: ICredentials
}

export interface LegalityDialogResult {
  checked: boolean;
  authProvider: AuthProvider;
  credentials?: ICredentials
}
