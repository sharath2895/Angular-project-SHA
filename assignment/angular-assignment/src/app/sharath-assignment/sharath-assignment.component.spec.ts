import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharathAssignmentComponent } from './sharath-assignment.component';

describe('SharathAssignmentComponent', () => {
  let component: SharathAssignmentComponent;
  let fixture: ComponentFixture<SharathAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharathAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharathAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
