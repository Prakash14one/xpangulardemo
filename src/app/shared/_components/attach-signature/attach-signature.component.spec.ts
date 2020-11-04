import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachSignatureComponent } from './attach-signature.component';

describe('AttachSignatureComponent', () => {
  let component: AttachSignatureComponent;
  let fixture: ComponentFixture<AttachSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
