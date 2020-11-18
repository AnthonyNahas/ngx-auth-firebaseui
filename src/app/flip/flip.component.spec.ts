import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlipComponent } from './flip.component';

describe('FlipComponent', () => {
  let component: FlipComponent;
  let fixture: ComponentFixture<FlipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
