import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteprojectsComponent } from './completeprojects.component';

describe('CompleteprojectsComponent', () => {
  let component: CompleteprojectsComponent;
  let fixture: ComponentFixture<CompleteprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
