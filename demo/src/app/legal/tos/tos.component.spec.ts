import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosComponent } from './tos.component';

describe('TosComponent', () => {
  let component: TosComponent;
  let fixture: ComponentFixture<TosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
