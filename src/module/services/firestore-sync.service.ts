import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {QueryFn} from '@angular/fire/firestore/interfaces';
import {UserInfo} from 'firebase';

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

  public getUserDocRefByUID(uid: string): AngularFirestoreDocument<UserInfo> {
    return this.afs.doc(`${collections.users}/${uid}`);
  }


  public getUsersCollectionRef(queryFn?: QueryFn): AngularFirestoreCollection<UserInfo> {
    return this.afs.collection(`${collections.users}/`, queryFn);
  }

  public deleteUserData(uid: string): Promise<any> {
    const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(uid);
    return userRef.delete();
  }


  public updateUserData(user: UserInfo): Promise<any> {
    // Sets user$ data to firestore on login
    const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(user.uid);
    const data: UserInfo = {
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
