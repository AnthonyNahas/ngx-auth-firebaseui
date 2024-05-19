import { Injectable } from "@angular/core";
import { UserInfo } from "@angular/fire/auth";
import { deleteDoc, doc, DocumentReference, Firestore, setDoc } from "@angular/fire/firestore";

export const collections = {
  users: "users",
};

@Injectable({
  providedIn: "root",
})
export class FirestoreSyncService {
  constructor(public afs: Firestore) {
    // this.afs.firestore.settings({timestampsInSnapshots: true});
  }

  // get timestamp() {
  //     return firestore.FieldValue.serverTimestamp();
  // }

  public getUserDocRefByUID(
    uid: string
  ): DocumentReference<UserInfo> {
    return doc(this.afs, `${collections.users}/${uid}`) as DocumentReference<UserInfo>;
  }

  public deleteUserData(uid: string): Promise<any> {
    const userRef: DocumentReference<UserInfo> = this.getUserDocRefByUID(
      uid
    );
    return deleteDoc(userRef);
  }

  public updateUserData(user: UserInfo): Promise<any> {
    // Sets user$ data to firestore on login
    const userRef: DocumentReference<UserInfo> = this.getUserDocRefByUID(
      user.uid
    );
    const data: UserInfo = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerId: user.providerId,
    };
    return setDoc(userRef, data, { merge: true });
  }
}
