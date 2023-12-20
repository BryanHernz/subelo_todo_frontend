import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPurchaseComponent } from './reject-purchase.component';

describe('RejectPurchaseComponent', () => {
  let component: RejectPurchaseComponent;
  let fixture: ComponentFixture<RejectPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectPurchaseComponent]
    });
    fixture = TestBed.createComponent(RejectPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
