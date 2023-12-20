import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsProductComponent } from './questions-product.component';

describe('QuestionsProductComponent', () => {
  let component: QuestionsProductComponent;
  let fixture: ComponentFixture<QuestionsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsProductComponent]
    });
    fixture = TestBed.createComponent(QuestionsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
