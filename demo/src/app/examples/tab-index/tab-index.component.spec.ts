import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIndexComponent } from './tab-index.component';

describe('TabIndexComponent', () => {
  let component: TabIndexComponent;
  let fixture: ComponentFixture<TabIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
