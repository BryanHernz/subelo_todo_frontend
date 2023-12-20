import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLocationsMenuComponent } from './categories-locations-menu.component';

describe('CategoriesLocationsMenuComponent', () => {
  let component: CategoriesLocationsMenuComponent;
  let fixture: ComponentFixture<CategoriesLocationsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesLocationsMenuComponent]
    });
    fixture = TestBed.createComponent(CategoriesLocationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
