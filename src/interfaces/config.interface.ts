import * as firebase from 'firebase/app';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;

export interface IAuthFirebaseUIConfig {
    authNextURL?: string,
    authMethod?: string, // popup or redirect
    authProviders?: [firebase.auth.AuthProvider],
    languageCode?: string,
    onlyEmailPasswordAuth?: boolean,
    onlyProvidersAuth?: boolean,
    toastMessageOnAuthSuccess?: boolean,
    toastMessageOnAuthError?: boolean,
    toastMessageThenEmitSuccessEvent?: boolean,
    toastMessageThenEmitErrorEvent?: boolean,
}

export const defaultAuthFirebaseUIConfig: IAuthFirebaseUIConfig = {
    authMethod: 'redirect',
    authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
    onlyEmailPasswordAuth: false,
    onlyProvidersAuth: false,
    toastMessageOnAuthSuccess: true,
    toastMessageOnAuthError: true,
    toastMessageThenEmitSuccessEvent: true,
    toastMessageThenEmitErrorEvent: false,
};

