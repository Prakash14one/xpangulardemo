import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerManageAccountComponent } from './consumer-manage-account.component';

describe('ConsumerManageAccountComponent', () => {
  let component: ConsumerManageAccountComponent;
  let fixture: ComponentFixture<ConsumerManageAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerManageAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
