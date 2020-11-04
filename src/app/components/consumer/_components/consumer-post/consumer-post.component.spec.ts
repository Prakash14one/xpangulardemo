import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPostComponent } from './consumer-post.component';

describe('ConsumerPostComponent', () => {
  let component: ConsumerPostComponent;
  let fixture: ComponentFixture<ConsumerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
