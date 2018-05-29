import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {IUser} from '../interfaces/user.interface';

export const collections = {
  users: 'users',
};

@Injectable()
export class FirestoreSyncService {

  constructor(public afs: AngularFirestore) {
    // this.afs.firestore.settings({timestampsInSnapshots: true});
  }

  // get timestamp() {
  //     return firebase.firestore.FieldValue.serverTimestamp();
  // }

  public getUserDocRefByUID(uid: string): AngularFirestoreDocument<IUser> {
    return this.afs.doc(`${collections.users}/${uid}`);
  }


  public getUsersCollectionRef(queryFn?: QueryFn): AngularFirestoreCollection<IUser> {
    return this.afs.collection(`${collections.users}/`, queryFn);
  }

  public updateUserData(user: IUser): Promise<any> {
    console.log('on updateUserData for the user -> ', user);
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
