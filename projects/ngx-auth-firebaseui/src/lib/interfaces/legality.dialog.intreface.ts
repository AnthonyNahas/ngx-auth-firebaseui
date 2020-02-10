import {ICredentials} from './main.interface';
import {AuthProvider} from '../services';

export interface LegalityDialogParams {
  tosUrl: string;
  privacyPolicyUrl: string;
  authProvider: AuthProvider;
  credentials?: ICredentials;
}

export interface LegalityDialogResult {
  checked: boolean;
  authProvider: AuthProvider;
  credentials?: ICredentials;
}
