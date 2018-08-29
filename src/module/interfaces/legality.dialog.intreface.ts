import {AuthProvider} from '../..';

export interface LegalityDialogParams {
  tosUrl: string;
  privacyPolicyUrl: string;
  authProvider: AuthProvider;
}

export interface LegalityDialogResult {
  checked: boolean;
  authProvider: AuthProvider;
}
