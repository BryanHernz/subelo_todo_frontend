import { Component } from '@angular/core';
import { CategoryModel } from 'src/app/models/categoryModel';
import { StateModel } from 'src/app/models/stateModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { StateService } from 'src/app/services/stateservice/state.service';

@Component({
  selector: 'app-categories-locations-menu',
  templateUrl: './categories-locations-menu.component.html',
  styleUrls: ['./categories-locations-menu.component.css']
})
export class CategoriesLocationsMenuComponent {
  categories: CategoryModel [] = [];
  states: StateModel [] = [];
  regiones: boolean = false;

  constructor(private categoryserv:CategoriesService,private statesserv:StateService) {
  }

  toggleSwitch() {
    this.regiones = !this.regiones;
  }

  ngOnInit(): void {
    this.categoryserv.getCategories().subscribe(data=>{
      this.categories=data;
    })
    this.statesserv.getStates().subscribe(data=>{
      this.states=data;
    })
  }
}
