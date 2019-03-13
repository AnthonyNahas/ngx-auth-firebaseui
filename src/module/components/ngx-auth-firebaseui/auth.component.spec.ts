import 'core-js/es7/reflect'; // needed for unit testing
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, SimpleChange} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {AuthComponent} from './auth.component';
import {AuthProcessService} from '../../services/auth-process.service';
import {FirestoreSyncService} from '../../services/firestore-sync.service';
import {NgxAuthFirebaseUIConfigToken} from '../../../module/ngx-auth-firebase-u-i.module';
import {EmailConfirmationComponent} from '../email-confirmation/email-confirmation.component';

describe('AuthComponent', function () {
  let de: DebugElement;
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let testBedService: AuthProcessService;
  let componentService: AuthProcessService;

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
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
        MatIconModule,
        MatProgressBarModule,
        MatPasswordStrengthModule,
        MatDividerModule,
      ],
      providers: [
        HttpClientTestingModule,
        AuthProcessService,
        FirestoreSyncService,
        AngularFireModule,
        {provide: AngularFirestore, useValue: FirestoreStub},
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
        {provide: NgxAuthFirebaseUIConfigToken, useValue: NgxAuthFirebaseUIConfigToken}
      ],
      declarations: [
        EmailConfirmationComponent,
        AuthComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AuthComponent);
      component = fixture.componentInstance;
      testBedService = TestBed.get(AuthProcessService);

      // AuthService provided to the TestBed
      testBedService = TestBed.get(AuthProcessService);

      // AuthService provided by Component, (should return MockAuthService)
      componentService = fixture.debugElement.injector.get(AuthProcessService);
      fixture.detectChanges();
    });
  }));

  it('should create components', () => expect(component).toBeDefined());

  it('should not call updateAuthSnackbarMessages when the messages input not changed', () => {

    console.log('component.authProcess', testBedService.messageOnAuthSuccess);

    const updateAuthSnackbarMessagesSpy = jest.spyOn(component, 'updateAuthSnackbarMessages');

    expect(component.messageOnAuthSuccess).toBeUndefined();
    expect(component.messageOnAuthError).toBeUndefined();
    expect(component.authProcess.messageOnAuthSuccess).toBeUndefined();
    expect(component.authProcess.messageOnAuthError).toBeUndefined();

    component.ngOnChanges({
      appearance: new SimpleChange(null, 'outline', true),
    });

    expect(updateAuthSnackbarMessagesSpy).not.toHaveBeenCalled();
    expect(component.authProcess.messageOnAuthSuccess).toBeUndefined();
    expect(component.authProcess.messageOnAuthError).toBeUndefined();
  });

  it('should update the snackbar messages on component changes', () => {
    const updateAuthSnackbarMessagesSpy = jest.spyOn(component, 'updateAuthSnackbarMessages');

    expect(component.messageOnAuthSuccess).toBeUndefined();
    expect(component.messageOnAuthError).toBeUndefined();
    expect(component.authProcess.messageOnAuthSuccess).toBeUndefined();
    expect(component.authProcess.messageOnAuthError).toBeUndefined();

    expect(updateAuthSnackbarMessagesSpy).not.toHaveBeenCalled();

    component.messageOnAuthSuccess = 'Here we go! The authentication was successful!';
    component.messageOnAuthError = 'Oop! Something went wrong! Please retry again!';

    component.ngOnChanges({
      messageOnAuthSuccess: new SimpleChange(null, component.messageOnAuthSuccess, true),
      messageOnAuthError: new SimpleChange(null, component.messageOnAuthError, true)
    });

    expect(updateAuthSnackbarMessagesSpy).toHaveBeenCalledTimes(1);
    expect(component.authProcess.messageOnAuthSuccess).toBeDefined();
    expect(component.authProcess.messageOnAuthSuccess).toEqual(component.messageOnAuthSuccess);
    expect(component.authProcess.messageOnAuthError).toBeDefined();
    expect(component.authProcess.messageOnAuthError).toEqual(component.messageOnAuthError);
  });
});
