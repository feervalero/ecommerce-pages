import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItem1Component } from './grid-item-1.component';

describe('GridItem1Component', () => {
  let component: GridItem1Component;
  let fixture: ComponentFixture<GridItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
