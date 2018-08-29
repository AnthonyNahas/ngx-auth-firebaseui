import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalityDialogComponent } from './legality-dialog.component';

describe('LegalityDialogComponent', () => {
  let component: LegalityDialogComponent;
  let fixture: ComponentFixture<LegalityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
