import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepContentComponent } from './step-content.component';

describe('StepContentComponent', () => {
  let component: StepContentComponent;
  let fixture: ComponentFixture<StepContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
