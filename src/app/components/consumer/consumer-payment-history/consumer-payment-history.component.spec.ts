import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPaymentHistoryComponent } from './consumer-payment-history.component';

describe('ConsumerPaymentHistoryComponent', () => {
  let component: ConsumerPaymentHistoryComponent;
  let fixture: ComponentFixture<ConsumerPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
