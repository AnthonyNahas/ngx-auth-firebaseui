import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackURLComponent } from './go-back-url.component';

describe('GoBackURLComponent', () => {
  let component: GoBackURLComponent;
  let fixture: ComponentFixture<GoBackURLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackURLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBackURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
