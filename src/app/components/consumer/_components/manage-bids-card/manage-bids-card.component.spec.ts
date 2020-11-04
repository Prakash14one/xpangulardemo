import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBidsCardComponent } from './manage-bids-card.component';

describe('ManageBidsCardComponent', () => {
  let component: ManageBidsCardComponent;
  let fixture: ComponentFixture<ManageBidsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBidsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBidsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
