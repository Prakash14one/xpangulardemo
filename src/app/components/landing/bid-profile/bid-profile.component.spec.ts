import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidProfileComponent } from './bid-profile.component';

describe('BidProfileComponent', () => {
  let component: BidProfileComponent;
  let fixture: ComponentFixture<BidProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
