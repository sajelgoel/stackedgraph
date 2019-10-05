import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedGraphCssComponent } from './stacked-graph-css.component';

describe('StackedGraphCssComponent', () => {
  let component: StackedGraphCssComponent;
  let fixture: ComponentFixture<StackedGraphCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedGraphCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedGraphCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
