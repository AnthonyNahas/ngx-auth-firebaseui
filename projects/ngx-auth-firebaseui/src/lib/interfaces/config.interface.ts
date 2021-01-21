// import * as firebase from 'firebase';

export interface NgxAuthFirebaseUIConfig {
  // authNextURL?: string, // popup or redirect
  // tosUrl?: string, // term of services url
  // ppUrl?: string, // privacy policy url
  // authProviders?: Array<AuthProvider>,
  // languageCode?: string, // todo: 28.3.18
  authGuardFallbackURL?: string;
  authGuardLoggedInURL?: string;
  enableFirestoreSync?: boolean;

  // Toasts
  toastMessageOnAuthSuccess?: boolean;
  toastMessageOnAuthError?: boolean;

  // Password length min/max in forms independently of each componenet min/max.
  // `min/max` input parameters in components should be within this range.
  passwordMaxLength?: number;
  passwordMinLength?: number;

  // Same as password but for the name
  nameMaxLength?: number;
  nameMinLength?: number;

  // If set, sign-in/up form is not available until email has been verified.
  // Plus protected routes are still protected even though user is connected.
  guardProtectedRoutesUntilEmailIsVerified?: boolean;

  // Control whether or not email verification is used
  enableEmailVerification?: boolean;

  // If set to true outputs the UserCredential object instead of firebase.User after login and signup
  useRawUserCredential?: boolean
}

export const defaultAuthFirebaseUIConfig: NgxAuthFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  enableFirestoreSync: true,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true,
  authGuardFallbackURL: '/',
  authGuardLoggedInURL: '/',

  // Password length min/max in forms independently of each componenet min/max.
  // `min/max` input parameters in components should be within this range.
  passwordMaxLength: 60,
  passwordMinLength: 8,

  // Same as password but for the name
  nameMaxLength: 50,
  nameMinLength: 2,

  // If set, sign-in/up form is not available until email has been verified.
  // Plus protected routes are still protected even though user is connected.
  guardProtectedRoutesUntilEmailIsVerified: true,

  // Default to email verification on
  enableEmailVerification: true,

  // Default to false to keep the current projects working as is
  useRawUserCredential: false
};

// Merge default config with user provided config.
export function ngxAuthFirebaseUIConfigFactory(userProvidedConfig: NgxAuthFirebaseUIConfig): NgxAuthFirebaseUIConfig {
  return Object.assign({}, defaultAuthFirebaseUIConfig, userProvidedConfig);
}
