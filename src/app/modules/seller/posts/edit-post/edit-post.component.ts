import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContainer, MatDialogContent, MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CityModel } from 'src/app/models/cityModel';
import { ProductModel } from 'src/app/models/productModel';
import { StateModel } from 'src/app/models/stateModel';
import { SubcategoryModel } from 'src/app/models/subcategoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CityService } from 'src/app/services/cityservice/city.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { StateService } from 'src/app/services/stateservice/state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,private activerouter:ActivatedRoute,private router:Router,private categoryserv:CategoriesService, private stateserv:StateService, private dialog:MatDialog,private citiesserv:CityService,private productservices:ProductsService,
    private dialogRef: MatDialogRef<EditPostComponent>) { 
  }

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
    ruta:string=environment.imagesUrl

  post:ProductModel=this.data;

  datosProducto: ProductModel=this.post;
  editarProducto=new FormGroup({
    title:new FormControl(this.datosProducto.title),
    subcategoryId:new FormControl(this.datosProducto.subcategoryId.toString()),
    categoryId:new FormControl(this.datosProducto.categoryId.toString()),
    userId:new FormControl(this.datosProducto.userId),
    cityId:new FormControl(this.datosProducto.cityId.toString()),
    stateId:new FormControl(this.datosProducto.stateId.toString()),
    description:new FormControl(this.datosProducto.description),
    condition:new FormControl(this.datosProducto.condition),
    price:new FormControl(this.datosProducto.price),
    stock:new FormControl(this.datosProducto.stock),
    referencialPrice:new FormControl(this.datosProducto.referencialPrice),
    saleState:new FormControl(this.datosProducto.saleState),
    height:new FormControl(this.datosProducto.height),
    width:new FormControl(this.datosProducto.width),
    length:new FormControl(this.datosProducto.length),
    weight:new FormControl(this.datosProducto.weight),
  })

  getSubcat():void{
    var nume=parseInt(this.editarProducto.value.categoryId!);
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
      this.editarProducto.value.subcategoryId=this.subcategorias[0].id?.toString()
    })
  }

  getCities():void{
    var nume=parseInt(this.editarProducto.value.stateId!);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
      this.editarProducto.value.cityId=this.comunas[0].id?.toString()
    })
  }

  getSubcatIni():void{
    var nume=this.datosProducto.categoryId;
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
    })
  }
  getCitiesIni():void{
    var nume=this.datosProducto.stateId;
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
    })
  }

  ngOnInit():void{
    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })

    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
    this.getSubcatIni()
    this.getCitiesIni()
  }

  updatePost(){if (
    this.editarProducto.valid) {
      this.productservices.putProduct({
        'id':this.datosProducto.id,
        'title':this.editarProducto.value.title!,
        'subcategoryId':parseInt(this.editarProducto.value.subcategoryId!),
        'categoryId':parseInt(this.editarProducto.value.categoryId!),
        'cityId':parseInt(this.editarProducto.value.cityId!),
        'stateId':parseInt(this.editarProducto.value.stateId!),
        'description':this.editarProducto.value.description!,
        'condition':this.editarProducto.value.condition!,
        'saleState':this.editarProducto.value.saleState!,
        'referencialPrice':this.editarProducto.value.referencialPrice!,
        'stock':this.editarProducto.value.stock!,
        'price':this.editarProducto.value.price!,
        'userId':this.post.userId,
        'discount':this.editarProducto.value.referencialPrice?(((this.editarProducto.value.referencialPrice-this.editarProducto.value.price!)*100)/this.editarProducto.value.referencialPrice):0,
        'approved':this.post.approved,
        'height':this.editarProducto.value.height!,
        'length':this.editarProducto.value.length!,
        'width':this.editarProducto.value.width!,
        'weight':this.editarProducto.value.weight!,
      }).subscribe(data=>{console.log(data),
        window.location.reload()})
      this.close();
    } else {
      this.errorStatus=true;
      this.errorMsj='Por favor complete todos los campos';
    }
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
