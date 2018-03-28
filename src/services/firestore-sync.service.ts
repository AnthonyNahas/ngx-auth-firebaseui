import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase';
import User = firebase.User;

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
    public getUserDocRefByUID(uid: string): AngularFirestoreDocument<User> {
        return this._afs.doc(`${collections.users}/${uid}`);
    }

    /**
     * Get all friendsbooks of a user by uid
     *
     * @param {QueryFn} queryFn - optional for queries
     * @return {AngularFirestoreCollection<IUser>} - collection reference of the users
     */
    public getUsersCollectionRef(queryFn?: QueryFn): AngularFirestoreCollection<User> {
        return this._afs.collection(`${collections.users}/`, queryFn);
    }

    public updateUserData(user: User): Promise<any> {
        console.log('on updateUser Data for user: ', user);
        // Sets user$ data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.getUserDocRefByUID(user.uid);
        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, {merge: true});
    }
}

export const collections = {
    users: 'users',
};
