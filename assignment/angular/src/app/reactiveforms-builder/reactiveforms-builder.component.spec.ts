import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsBuilderComponent } from './reactiveforms-builder.component';

describe('ReactiveformsBuilderComponent', () => {
  let component: ReactiveformsBuilderComponent;
  let fixture: ComponentFixture<ReactiveformsBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
