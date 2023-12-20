import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTbkComponent } from './post-tbk.component';

describe('PostTbkComponent', () => {
  let component: PostTbkComponent;
  let fixture: ComponentFixture<PostTbkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTbkComponent]
    });
    fixture = TestBed.createComponent(PostTbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
