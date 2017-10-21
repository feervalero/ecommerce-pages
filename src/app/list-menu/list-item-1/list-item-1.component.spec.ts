import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItem1Component } from './list-item-1.component';

describe('ListItem1Component', () => {
  let component: ListItem1Component;
  let fixture: ComponentFixture<ListItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
