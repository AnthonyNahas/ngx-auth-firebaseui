// import * as firebase from 'firebase';
// import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
// import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
// import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
// import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import AuthProvider = firebase.auth.AuthProvider;

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
}

export const defaultAuthFirebaseUIConfig: NgxAuthFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  authGuardFallbackURL: '/',
  authGuardLoggedInURL: '/',
  enableFirestoreSync: true,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true,
  // Password length min/max in forms independently of each componenet min/max.
  // `min/max` input parameters in components should be within this range.
  passwordMaxLength: 60,
  passwordMinLength: 8,
  // Same as password but for the name
  nameMaxLength: 50,
  nameMinLength: 2
};

// Merge default config with user provided config.
export function ngxAuthFirebaseUIConfigFactory(userProvidedConfig: NgxAuthFirebaseUIConfig): NgxAuthFirebaseUIConfig {
  return Object.assign({}, defaultAuthFirebaseUIConfig, userProvidedConfig);
}
