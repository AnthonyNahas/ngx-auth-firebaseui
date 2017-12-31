import * as firebase from 'firebase/app';

export interface IAuthFirebaseUIConfig {
    authNextURL?: string,
    authMethod?: string,
    authProviders?: [firebase.auth.AuthProvider],
    languageCode?: string
}