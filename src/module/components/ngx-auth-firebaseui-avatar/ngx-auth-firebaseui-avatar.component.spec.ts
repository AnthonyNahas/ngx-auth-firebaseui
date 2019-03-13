import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxAuthFirebaseuiAvatarComponent} from './ngx-auth-firebaseui-avatar.component';
import {MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatDialogRef, MatMenuModule, MatTooltipModule} from '@angular/material';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthStub} from '../../tests/helper';
import {RouterTestingModule} from '@angular/router/testing';

describe('NgxAuthFirebaseuiAvatarComponent', () => {
  let component: NgxAuthFirebaseuiAvatarComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAuthFirebaseuiAvatarComponent],
      imports: [
        AngularFireModule,
        RouterTestingModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule
      ],
      providers: [
        {provide: AngularFireAuth, useValue: AngularFireAuthStub},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseuiAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
