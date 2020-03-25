import {ICredentials} from './main.interface';
import {AuthProvider} from '../services/auth-process.service';

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
