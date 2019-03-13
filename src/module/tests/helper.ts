import {By} from '@angular/platform-browser';
import {MatButton} from '@angular/material';
import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export function getButtonById(fixture: ComponentFixture<any>, id: string): DebugElement[] {
  return fixture.debugElement.queryAll(By.directive(MatButton))
    .filter(button => button.attributes['id'] === id);
}

const credentialsMock = {
  email: 'abc@123.com',
  password: 'password'
};

const userMock = {
  uid: 'ABC123',
  email: credentialsMock.email,
};

const fakeAuthState = new BehaviorSubject(null); // <= Pay attention to this guy

const mockSignInHandler = (email: any, password: any): Promise<any> => {
  fakeAuthState.next(userMock);
  return Promise.resolve(userMock);
};

const mockSignOutHandler = (): Promise<any> => {
  fakeAuthState.next(null);
  return Promise.resolve();
};

export const AngularFireAuthStub = {
  authState: fakeAuthState,
  user: fakeAuthState,
  auth: {
    createUserWithEmailAndPassword: jasmine
      .createSpy('createUserWithEmailAndPassword')
      .and
      .callFake(mockSignInHandler),
    signInWithEmailAndPassword: jasmine
      .createSpy('signInWithEmailAndPassword')
      .and
      .callFake(mockSignInHandler),
    signOut: jasmine
      .createSpy('signOut')
      .and
      .callFake(mockSignOutHandler),
  },
};

export const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({foo: 'bar'}),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
};
