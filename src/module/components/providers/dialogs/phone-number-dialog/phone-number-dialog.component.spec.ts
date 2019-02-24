import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberDialogComponent } from './phone-number-dialog.component';

describe('PhoneNumberDialogComponent', () => {
  let component: PhoneNumberDialogComponent;
  let fixture: ComponentFixture<PhoneNumberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
