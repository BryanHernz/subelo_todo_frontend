import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CityModel } from 'src/app/models/cityModel';
import { ProductImageModel } from 'src/app/models/productImage';
import { StateModel } from 'src/app/models/stateModel';
import { SubcategoryModel } from 'src/app/models/subcategoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CityService } from 'src/app/services/cityservice/city.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { StateService } from 'src/app/services/stateservice/state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private http: HttpClient,private prodservice:ProductsService,private categoryserv:CategoriesService,private stateserv:StateService,private citiesserv:CityService) {}
    
  errorStatus:boolean=false;
  errorMsj:any;

  categorias:CategoryModel[]=[];
  subcategorias:SubcategoryModel[]=[];
  regiones:StateModel[]=[];
  comunas:CityModel[]=[];
  saleStates:String[]=['En Venta',
  'Vendido',];
  productConditions:String[]=['Nuevo',
  'Usado - Como Nuevo',
  'Usado - Buen Estado',
  'Usado - Aceptable',];
  selectedValue:string='- CATEGORÍA -';
  selectedreg:string='- REGIÓN -';
  selectedcom:string='- COMUNA -';
  selectedSub:string='- SUBCATEGORÍA -';
  selectedcon:string='- Condición del producto -';
  selectedest:string='- Estado de la venta -';
  ruta:string=environment.imagesUrl

  multipleImages = [];

  selectMultipleImage(event:any){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
    console.log(this.multipleImages)
  }

  generarNumeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  onMultipleSubmit(id:string){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img, id+this.newprod.value.title!.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    }
      this.prodservice.postProductImages(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          console.log(value.name+'.'+value.type.split('/')[1]);
          this.prodservice.postProductImage({
            'productId':parseInt(id),
            'filePath':value.name+value.type.replace('/','.'),
          }).subscribe(data=>{console.log(data),
            window.location.reload()});
        }
      }
    );
  }  

  newprod=new FormGroup({
    title:new FormControl(''),
    subcategoryId:new FormControl(),
    subcategory:new FormControl({}),
    categoryId:new FormControl(),
    category:new FormControl({}),
    userId:new FormControl(),
    dimensions:new FormControl({}),
    cityId:new FormControl(),
    city:new FormControl({}),
    stateId:new FormControl(),
    state:new FormControl({}),
    description:new FormControl(''),
    condition:new FormControl(''),
    price:new FormControl(),
    referencialPrice:new FormControl(),
    saleState:new FormControl(''),
    stock:new FormControl(),
    altura:new FormControl(),
    ancho:new FormControl(),
    largo:new FormControl(),
    peso:new FormControl(),
  })

  saveProduct(){
    if (this.newprod.valid) {
      if (this.multipleImages.length>1) {
        this.prodservice.postProduct(
          {
            'title':this.newprod.value.title!,
            'subcategoryId':parseInt(this.newprod.value.subcategoryId!),
            'categoryId':parseInt(this.newprod.value.categoryId!),
            'cityId':parseInt(this.newprod.value.cityId!),
            'stateId':parseInt(this.newprod.value.stateId!),
            'description':this.newprod.value.description!,
            'condition':this.newprod.value.condition!,
            'saleState':this.newprod.value.saleState!,
            'referencialPrice':this.newprod.value.referencialPrice??null,
            'price':this.newprod.value.price!,
            'discount':this.newprod.value.referencialPrice?(((this.newprod.value.referencialPrice-this.newprod.value.price)*100)/this.newprod.value.referencialPrice):0,
            'approved':false,
            'userId':parseInt(localStorage.getItem("userId")!),
            'height':this.newprod.value.altura??null,
            'stock':this.newprod.value.stock??1,
            'length':this.newprod.value.largo??null,
            'width':this.newprod.value.ancho??null,
            'weight':this.newprod.value.peso??null,
          }
      ).subscribe(data=>{console.log(data),
        this.onMultipleSubmit(data.id)
        window.location.reload()});
      console.log(this.prodservice)} else {
        this.errorStatus=true;
        this.errorMsj='Por favor seleccione imágenes';
      }
    } else {
      this.errorStatus=true;
      this.errorMsj='Por favor complete todos los campos';
    }
  }

  getSubcat():void{
    var nume=parseInt(this.selectedValue);
    console.log(nume)
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
    })
  }
  
  getCities():void{
    var nume=parseInt(this.selectedreg);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
      console.log(this.comunas)
    })
  }

  ngOnInit():void{

    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })

    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })

  }
}
