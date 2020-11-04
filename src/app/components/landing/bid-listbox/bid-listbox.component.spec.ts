import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidListboxComponent } from './bid-listbox.component';

describe('BidListboxComponent', () => {
  let component: BidListboxComponent;
  let fixture: ComponentFixture<BidListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
