import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuthStub, FirestoreStub} from '../../tests/helper';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserComponent} from './user.component';
import {NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from '../../ngx-auth-firebase-u-i.module';
import {ngxAuthFirebaseUIConfigFactory} from '../../interfaces/config.interface';
import {AuthProcessService} from '../../services/auth-process.service';
import {FirestoreSyncService} from '../../services/firestore-sync.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
