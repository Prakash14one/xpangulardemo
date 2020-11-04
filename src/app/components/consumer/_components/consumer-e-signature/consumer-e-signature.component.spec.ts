import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerESignatureComponent } from './consumer-e-signature.component';

describe('ConsumerESignatureComponent', () => {
  let component: ConsumerESignatureComponent;
  let fixture: ComponentFixture<ConsumerESignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerESignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerESignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
