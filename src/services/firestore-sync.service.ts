import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {IUser} from '../interfaces/user.interface';

@Injectable()
export class FirestoreSyncService {

    constructor(private _afs: AngularFirestore) {
    }

    get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
    }

    /**
     * Get reference of a user document from firestore by uid
     *
     * @param {string} uid - the user uid
     * @return {AngularFirestoreDocument<IUser>} - the request user
     */
    public getUserDocRefByUID(uid: string): AngularFirestoreDocument<IUser> {
        return this._afs.doc(`${collections.users}/${uid}`);
    }

    /**
     * Get all friendsbooks of a user by uid
     *
     * @param {QueryFn} queryFn - optional for queries
     * @return {AngularFirestoreCollection<IUser>} - collection reference of the users
     */
    public getUsersCollectionRef(queryFn?: QueryFn): AngularFirestoreCollection<IUser> {
        return this._afs.collection(`${collections.users}/`, queryFn);
    }

    public updateUserData(user: IUser): Promise<any> {
        console.log('on updateUser Data for user: ', user);
        // Sets user$ data to firestore on login
        const userRef: AngularFirestoreDocument<IUser> = this.getUserDocRefByUID(user.uid);
        const data: IUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId
        };
        return userRef.set(data, {merge: true});
    }
}

export const collections = {
    users: 'users',
};
