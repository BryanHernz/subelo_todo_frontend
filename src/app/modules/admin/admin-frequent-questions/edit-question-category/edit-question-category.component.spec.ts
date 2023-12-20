import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionCategoryComponent } from './edit-question-category.component';

describe('EditQuestionCategoryComponent', () => {
  let component: EditQuestionCategoryComponent;
  let fixture: ComponentFixture<EditQuestionCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditQuestionCategoryComponent]
    });
    fixture = TestBed.createComponent(EditQuestionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
