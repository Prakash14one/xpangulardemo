import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESignatureComponent } from './e-signature.component';

describe('ESignatureComponent', () => {
  let component: ESignatureComponent;
  let fixture: ComponentFixture<ESignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
