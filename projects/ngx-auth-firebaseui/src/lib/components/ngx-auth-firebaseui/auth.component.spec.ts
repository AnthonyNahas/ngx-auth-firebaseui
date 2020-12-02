import 'core-js/es7/reflect'; // needed for unit testing
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, SimpleChange} from '@angular/core';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatPasswordStrengthComponent, MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {AuthComponent} from './auth.component';
import {AuthProcessService} from '../../services/auth-process.service';
import {FirestoreSyncService} from '../../services/firestore-sync.service';
import {ngxAuthFirebaseUIConfigFactory} from '../../interfaces/config.interface';
import {EmailConfirmationComponent} from '../email-confirmation/email-confirmation.component';
import {AngularFireAuthStub, FirestoreStub} from '../../tests/helper';
import {RouterTestingModule} from '@angular/router/testing';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from '../../tokens';

describe('AuthComponent', function() {
  let de: DebugElement;
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let componentService: AuthProcessService;


  beforeEach(waitForAsync(() => {

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {matches: true};
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
        RouterTestingModule
      ],
      providers: [
        HttpClientTestingModule,
        FirestoreSyncService,
        AngularFireModule,
        {provide: AngularFirestore, useValue: FirestoreStub},
        {provide: AngularFireAuth, useValue: AngularFireAuthStub},
        {provide: UserProvidedConfigToken, useValue: {}},
        {provide: NgxAuthFirebaseUIConfigToken, useFactory: ngxAuthFirebaseUIConfigFactory, deps: [UserProvidedConfigToken]},
        AuthProcessService
      ],
      declarations: [
        EmailConfirmationComponent,
        AuthComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AuthComponent);
      component = fixture.componentInstance;
      component.passwordStrength =
        TestBed.createComponent(MatPasswordStrengthComponent).componentInstance;

      // AuthService provided by Component, (should return MockAuthService)
      componentService = fixture.debugElement.injector.get(AuthProcessService);
      fixture.detectChanges();
    });
  }));

  it('should create components', () => expect(component).toBeDefined());

  it('should not call updateAuthSnackbarMessages when the messages input not changed', () => {

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
