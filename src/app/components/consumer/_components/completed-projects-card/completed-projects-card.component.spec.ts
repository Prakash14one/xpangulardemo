import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProjectsCardComponent } from './completed-projects-card.component';

describe('CompletedProjectsCardComponent', () => {
  let component: CompletedProjectsCardComponent;
  let fixture: ComponentFixture<CompletedProjectsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedProjectsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
