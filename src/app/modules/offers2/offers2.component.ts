import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { ProductModel } from 'src/app/models/productModel';
import { StateModel } from 'src/app/models/stateModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { StateService } from 'src/app/services/stateservice/state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers2',
  templateUrl: './offers2.component.html',
  styleUrls: ['./offers2.component.css']
})
export class Offers2Component implements OnInit {

  categoria!:CategoryModel;

  orderBy:FilterList[] = [{id:0,text:'Menor precio a mayor precio'},{id:1,text:'Mayor precio a menor precio'},{id:2,text:'Descuento'},{id:3,text:'Titulo'}]

  ruta:string=environment.imagesUrl

  productos:ProductModel[] = [];
  
  selectedopt:string='';

  num:number=0;

  prods:ProductModel[] = [];

  states:StateModel[] = []; 

  id!:number;

  constructor(private route:ActivatedRoute,private categoryservice:CategoriesService,private statesservice:StateService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")!);
      this.categoryservice.getCategory(this.id).subscribe(data => {
      this.categoria = data;
      this.prods = this.categoria.products!;
      this.productos = this.categoria.products!;
      console.log(this.categoria.subcategories)
    })
    this.statesservice.getStates().subscribe(data => {
      this.states = data;
    })
  }

  filtrarSubcategoria(id:number){
    this.productos = this.prods.filter((prod)=>prod.subcategory?.id==id);
  }

  filtrarDiscount(min:number,max:number){
    this.productos = this.prods.filter((prod)=>prod.discount<=max && prod.discount>=min);
  }

  filtrarState(id:number){
    this.productos = this.prods.filter((prod)=>prod.state?.id==id);
  }

  shorting(){
    this.num=parseInt(this.selectedopt);
    if (this.num==0) {
      this.productos.sort((a,b)=>a.price-b.price);
    }
    if (this.num==1) {
      this.productos.sort((a,b)=>b.price-a.price);
    }
    if (this.num==2) {
      this.productos.sort((a,b)=>b.discount-a.discount);
    }
    if (this.num==3) {
      this.productos.sort((a,b)=>a.title.localeCompare(b.title));
    }
  }

  paginas = [1, 2, 3, 4, 5]

  seccionActual: String='';

  paginaActual: number = 1;

  changePage(num: number)
  {
    this.paginaActual=num
  }

  prevPage()
  {
    if (this.paginaActual>1) {
      this.paginaActual=this.paginaActual-1  
    }   
    console.log(this.paginaActual)
  }

  nextPage()
  {
    if (this.paginaActual<this.paginas.length) {
      this.paginaActual=this.paginaActual+1 
    }     
    console.log(this.paginaActual)
  }

  changeSection(seccion: String,id:number)
  {
    this.seccionActual=seccion
    this.filtrarSubcategoria(id );
  }

}

interface FilterList{
  id:number;
  text:string;
}