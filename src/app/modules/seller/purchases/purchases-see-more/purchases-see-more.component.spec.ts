import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesSeeMoreComponent } from './purchases-see-more.component';

describe('PurchasesSeeMoreComponent', () => {
  let component: PurchasesSeeMoreComponent;
  let fixture: ComponentFixture<PurchasesSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesSeeMoreComponent]
    });
    fixture = TestBed.createComponent(PurchasesSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
