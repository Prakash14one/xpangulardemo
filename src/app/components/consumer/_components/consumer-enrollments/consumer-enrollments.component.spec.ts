import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerEnrollmentsComponent } from './consumer-enrollments.component';

describe('ConsumerEnrollmentsComponent', () => {
  let component: ConsumerEnrollmentsComponent;
  let fixture: ComponentFixture<ConsumerEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
