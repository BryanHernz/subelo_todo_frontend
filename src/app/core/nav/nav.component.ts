import { Component, OnInit } from '@angular/core';
import { Category } from "../../shared/models/categories";
import { Region } from 'src/app/shared/models/regions';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from 'src/app/shared/signin/signin.component';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { StateService } from 'src/app/services/stateservice/state.service';
import { CategoryModel } from 'src/app/models/categoryModel';
import { StateModel } from 'src/app/models/stateModel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css',]
})
export class NavComponent implements OnInit {
  status = false;
  menuOpen: boolean = false;
  sellerLogged: boolean = false;
  sellerMenuOpen: boolean = false;
  adminLogged: boolean = false;
  adminMenuOpen: boolean = false;
  isLoggedIn$ = this.api.isLoggedIn$;
  isLoggedIn:boolean=false;
  name:string=localStorage.getItem('userName')?.split(' ')[0]!;
  lastName:string=localStorage.getItem('userLastName')?.substring(0,1)!;
  categories: CategoryModel [] = [];
  states: StateModel [] = [];
  regiones: boolean = false;

  constructor(
    private dialog: MatDialog,
    private api:ApiService,private categoryserv:CategoriesService,private statesserv:StateService) {
    }
  
    toggleSwitch() {
      this.regiones = !this.regiones;
    }

  ngOnInit():void{
    this.checkLocalStorage();
    this.categoryserv.getCategories().subscribe(data=>{
      this.categories=data;
    })
    this.statesserv.getStates().subscribe(data=>{
      this.states=data;
    })
  
  }

  cerrar(){
    this.toggleMenu()
  }

  checkLocalStorage(){
    if (localStorage.getItem("token")) {
      this.isLoggedIn=true;
      if(localStorage.getItem("userType")=='1'){
        this.adminLogged=true;
      }
      if(localStorage.getItem("userType")=='2'){
        this.sellerLogged=true;
      }
    }
    else{
      this.isLoggedIn=true;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent);
    if (dialogRef.afterClosed()) {
      this.checkLocalStorage();
    }
  }

  sellerMode()
  {
    this.sellerLogged = true;    
    this.adminLogged=false;   
  }

  adminMode()
  {
    this.adminLogged = true;      
    this.sellerLogged=false; 
  }

  addToggle()
  {
    this.status = !this.status;       
  }

  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.regiones = false;
  }

  toggleSellerMenu() {
    this.sellerMenuOpen = !this.sellerMenuOpen;
  }

  /*openCartDialog() {
    const dialogRef = this.dialog.open(ShoppingCartComponent);
  }*/

  
}