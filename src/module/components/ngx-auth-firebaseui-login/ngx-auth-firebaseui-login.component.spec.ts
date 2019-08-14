import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthFirebaseuiLoginComponent } from './ngx-auth-firebaseui-login.component';

describe('NgxAuthFirebaseuiLoginComponent', () => {
  let component: NgxAuthFirebaseuiLoginComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthFirebaseuiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseuiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
