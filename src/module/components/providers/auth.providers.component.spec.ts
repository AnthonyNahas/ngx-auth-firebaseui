import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {By, DomSanitizer} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatButtonModule, MatIconModule, MatIconRegistry, MatSnackBarModule} from '@angular/material';
import {AuthProvidersComponent, Layout} from './auth.providers.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthProcessService, FirestoreSyncService} from '../../..';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthProvider} from '../../services/auth-process.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import * as http from 'http';

describe('AuthProvidersComponent', function () {
  let de: DebugElement;
  let comp: AuthProvidersComponent;
  let fixture: ComponentFixture<AuthProvidersComponent>;

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

  const angularFireAuthStub = {
    authState: fakeAuthState,
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

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({foo: 'bar'}),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {matches: true}
      })
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatSnackBarModule],
      declarations: [AuthProvidersComponent],
      providers: [
        HttpClientTestingModule,
        AuthProcessService,
        FirestoreSyncService,
        AngularFireModule,
        {provide: AngularFirestore, useValue: FirestoreStub},
        {provide: AngularFireAuth, useValue: angularFireAuthStub}]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProvidersComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create components', () => expect(comp).toBeDefined());

  it('should have a theme input', () => {
    expect(comp.theme).toBeUndefined();
  });

  it('should have a layout input', () => {
    expect(comp.layout).toEqual(Layout.ROW);
  });

  it('should have a providers input', () => {
    expect(comp.providers).toEqual(AuthProvider.ALL);
  });

  it('should create by default all available providers button', () => {
    const div = fixture.debugElement.query(By.all());
    expect(div.name).toEqual('div');
    // should create the 4 buttons
    expect(div.children[0].children.length).toBe(4);
    // console.log('div.children.length', div.children[0].children.length);

    for (const child of div.children[0].children) {
      // console.log('child', child);
      expect(child.name).toEqual('button');
      expect('mat-button' in child.attributes).toBeTruthy();

      const span = child.children.filter(spanChild => spanChild.name === 'span');
      expect(span).toBeTruthy();

      const matIcon = span[0].query(By.css('.mat-icon'));

      expect(matIcon).toBeTruthy();

      const svg = matIcon.nativeElement;

      // expect(svg).toBeTruthy();
      console.log('svg', svg);
    }
  });

  // it('should create by default a google button', () => {
  //   let el = fixture.debugElement.query(By.css('.mat-button'));

  // console.log('el: ', el);
  // console.log('el: ', el.nativeElement.innerHTML);
  // console.log('el: ', el.nativeElement.querySelector('span').innerHTML);
  // });
});
