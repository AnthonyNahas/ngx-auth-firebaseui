import {UserInfo} from 'firebase/app';

export interface IUser extends UserInfo {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string | null;
    uid: string;
}
