import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionCategoryComponent } from './add-question-category.component';

describe('AddQuestionCategoryComponent', () => {
  let component: AddQuestionCategoryComponent;
  let fixture: ComponentFixture<AddQuestionCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuestionCategoryComponent]
    });
    fixture = TestBed.createComponent(AddQuestionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
