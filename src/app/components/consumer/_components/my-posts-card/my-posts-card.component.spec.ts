import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostsCardComponent } from './my-posts-card.component';

describe('MyPostsCardComponent', () => {
  let component: MyPostsCardComponent;
  let fixture: ComponentFixture<MyPostsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
