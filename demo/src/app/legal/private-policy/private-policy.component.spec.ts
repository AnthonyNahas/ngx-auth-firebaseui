import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePolicyComponent } from './private-policy.component';

describe('PrivatePolicyComponent', () => {
  let component: PrivatePolicyComponent;
  let fixture: ComponentFixture<PrivatePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
