import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverSellComponent } from './deliver-sell.component';

describe('DeliverSellComponent', () => {
  let component: DeliverSellComponent;
  let fixture: ComponentFixture<DeliverSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverSellComponent]
    });
    fixture = TestBed.createComponent(DeliverSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
