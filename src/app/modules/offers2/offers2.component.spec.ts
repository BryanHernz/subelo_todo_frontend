import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers2Component } from './offers2.component';

describe('Offers2Component', () => {
  let component: Offers2Component;
  let fixture: ComponentFixture<Offers2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offers2Component]
    });
    fixture = TestBed.createComponent(Offers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
