import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

import {NgxAuthFirebaseuiRegisterComponent} from './ngx-auth-firebaseui-register.component';
import {AuthProcessService} from '../../services/auth-process.service';
import {FirestoreSyncService} from '../../services/firestore-sync.service';
import {NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from '../../../module/ngx-auth-firebase-u-i.module';

import {AngularFireAuthStub, FirestoreStub} from '../../tests/helper';
import {ngxAuthFirebaseUIConfigFactory} from '../../interfaces/config.interface';


describe('NgxAuthFirebaseuiRegisterComponent', () => {
  let component: NgxAuthFirebaseuiRegisterComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiRegisterComponent>;
  let componentService: AuthProcessService;

  beforeEach(waitForAsync(() => {

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {matches: true};
      })
    });


    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSnackBarModule,
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [NgxAuthFirebaseuiRegisterComponent]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(NgxAuthFirebaseuiRegisterComponent);
      component = fixture.componentInstance;

      // AuthService provided by Component, (should return MockAuthService)
      componentService = fixture.debugElement.injector.get(AuthProcessService);

      component.ngOnInit();
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    const email = component.registerForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(email.valid).toBeFalsy();

    email.setValue('test');
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('password field validity', () => {
    let errors = {};
    const password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(password.valid).toBeFalsy();

    password.setValue('test');
    password.setValue('test');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('register form validity', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['name'].setValue('Test XYZ');
    component.registerForm.controls['email'].setValue('test@test.com');
    component.registerForm.controls['password'].setValue('123456789');
    component.registerForm.controls['passwordConfirm'].setValue('123456789');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('should create account button be disabled if the register form is invalid', () => {
    const createAccountButton: DebugElement = fixture.debugElement.query(By.css('#createAccountButton'));
    expect(createAccountButton.nativeElement.disabled).toBeTruthy();
  });

  it('should create button be enabled if the register form is valid', () => {
    const createAccountButton: DebugElement = fixture.debugElement.query(By.css('#createAccountButton'));
    component.registerForm.controls['name'].setValue('Test XYZ');
    component.registerForm.controls['email'].setValue('test@test.com');
    component.registerForm.controls['password'].setValue('123456789');
    component.registerForm.controls['passwordConfirm'].setValue('123456789');
    fixture.detectChanges();
    expect(createAccountButton.nativeElement.disabled).toBeFalsy();
  });

  it('should trigger onLoginRequested event when its requested via the login button', () => {
    const createAccountButton = fixture.nativeElement.querySelector('#loginButton');
    spyOn(component.onLoginRequested, 'emit');
    createAccountButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.onLoginRequested.emit).toHaveBeenCalled();

  });

  it('should trigger onCreateAccountButtonClicked event when create account button is clicked', () => {
    const createAccountButton = fixture.nativeElement.querySelector('#createAccountButton');
    spyOn(component.onCreateAccountButtonClicked, 'emit');
    createAccountButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.onCreateAccountButtonClicked.emit).toHaveBeenCalled();

  });

});
