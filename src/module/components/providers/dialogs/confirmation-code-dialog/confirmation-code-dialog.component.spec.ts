import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCodeDialogComponent } from './confirmation-code-dialog.component';

describe('ConfirmationCodeDialogComponent', () => {
  let component: ConfirmationCodeDialogComponent;
  let fixture: ComponentFixture<ConfirmationCodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationCodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
