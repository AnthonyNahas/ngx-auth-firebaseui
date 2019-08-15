import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxAuthFirebaseuiLoginComponent} from './ngx-auth-firebaseui-login.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthProcessService, FirestoreSyncService, NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from '../../..';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuthStub, FirestoreStub} from '../../tests/helper';
import {AngularFireAuth} from '@angular/fire/auth';
import {ngxAuthFirebaseUIConfigFactory} from '../../interfaces/config.interface';

describe('NgxAuthFirebaseuiLoginComponent', () => {
  let component: NgxAuthFirebaseuiLoginComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiLoginComponent>;
  let testBedService: AuthProcessService;
  let componentService: AuthProcessService;

  beforeEach(async(() => {

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {matches: true}
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
      declarations: [NgxAuthFirebaseuiLoginComponent]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(NgxAuthFirebaseuiLoginComponent);
      component = fixture.componentInstance;

      // AuthService provided by Component, (should return MockAuthService)
      componentService = fixture.debugElement.injector.get(AuthProcessService);

      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
