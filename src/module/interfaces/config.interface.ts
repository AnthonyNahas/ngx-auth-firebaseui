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
  authGuardFallbackURL?: string,
  authGuardLoggedInURL?: string,
  enableFirestoreSync?: boolean,
  toastMessageOnAuthSuccess?: boolean,
  toastMessageOnAuthError?: boolean
}

export const defaultAuthFirebaseUIConfig: NgxAuthFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  authGuardFallbackURL: '/',
  authGuardLoggedInURL: '/',
  enableFirestoreSync: true,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true
};

