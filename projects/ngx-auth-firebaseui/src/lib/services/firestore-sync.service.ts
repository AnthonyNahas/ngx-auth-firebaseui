import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import firebase from "firebase/app";

export const collections = {
  users: "users",
};

@Injectable({
  providedIn: "root",
})
export class FirestoreSyncService {
  constructor(public afs: AngularFirestore) {
    // this.afs.firestore.settings({timestampsInSnapshots: true});
  }

  // get timestamp() {
  //     return firebase.firestore.FieldValue.serverTimestamp();
  // }

  public getUserDocRefByUID(
    uid: string
  ): AngularFirestoreDocument<firebase.UserInfo> {
    return this.afs.doc(`${collections.users}/${uid}`);
  }

  public deleteUserData(uid: string): Promise<any> {
    const userRef: AngularFirestoreDocument<firebase.UserInfo> = this.getUserDocRefByUID(
      uid
    );
    return userRef.delete();
  }

  public updateUserData(user: firebase.UserInfo): Promise<any> {
    // Sets user$ data to firestore on login
    const userRef: AngularFirestoreDocument<firebase.UserInfo> = this.getUserDocRefByUID(
      user.uid
    );
    const data: firebase.UserInfo = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerId: user.providerId,
    };
    return userRef.set(data, { merge: true });
  }
}
