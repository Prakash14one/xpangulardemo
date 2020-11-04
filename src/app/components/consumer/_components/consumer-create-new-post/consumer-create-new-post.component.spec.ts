import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCreateNewPostComponent } from './consumer-create-new-post.component';

describe('ConsumerCreateNewPostComponent', () => {
  let component: ConsumerCreateNewPostComponent;
  let fixture: ComponentFixture<ConsumerCreateNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerCreateNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCreateNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
