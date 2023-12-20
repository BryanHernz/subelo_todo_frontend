import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { UploadImageComponent } from 'src/app/shared/components/upload-image/upload-image.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banners-categories',
  templateUrl: './banners-categories.component.html',
  styleUrls: ['./banners-categories.component.css']
})
export class BannersCategoriesComponent implements OnInit {

  categorias:CategoryModel[] = [];

  constructor(private dialog: MatDialog,private categorieservice: CategoriesService) {
  }

  ruta:string=environment.imagesUrl
  ngOnInit(): void {
    this.categorieservice.getCategories().subscribe(data=>{
      this.categorias=data;
    })
  }
  
  multipleImages = [];
  multipleIcons = [];

  selectImage(category: CategoryModel,event:any){
    this.multipleImages = [];
    this.multipleImages = event.target.files;
    this.onMultipleSubmit(category);
  }

  generarNumeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  onMultipleSubmit(categoryModel:CategoryModel){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img, categoryModel.id+this.getCleanedString(categoryModel.name!).replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    }
      this.categorieservice.postCategotyBanner(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          this.categorieservice.putCategory({
            'id':categoryModel.id,
            'name':categoryModel.name!,
            'logo':categoryModel.logo!,
            'banner':this.getCleanedString(value.name+value.type).replace('/','.'),
          }).subscribe(data=>{console.log(data),window.location.reload()});
           
        }
      }
    );
  }  

  getCleanedString(cadena:String):String{
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g,"_");
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace('á',"a");
    cadena = cadena.replace('é',"e");
    cadena = cadena.replace('í',"i");
    cadena = cadena.replace('ó',"o");
    cadena = cadena.replace('ú',"u");
    cadena = cadena.replace('ñ',"n");
    console.log(cadena)
    return cadena;
 }

  selectIcono(category: CategoryModel,event:any){
    this.multipleIcons = [];
    this.multipleIcons = event.target.files;
    this.onIconoSubmit(category);
  }

  onIconoSubmit(categoryModel:CategoryModel){
    const formDatai = new FormData();
    for(let img of this.multipleIcons){
      formDatai.append('files', img, categoryModel.id+this.getCleanedString(categoryModel.name)!.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    }
      this.categorieservice.postCategotyBanner(formDatai).subscribe(data=>{console.log(data)});

      
      formDatai.forEach( (value) => {
        
        if (value instanceof File) {
          console.log(value.name+value.type.replace('/','.').split('+')[0])
          this.categorieservice.putCategory({
            'id':categoryModel.id,
            'name':categoryModel.name!,
            'banner':categoryModel.banner!,
            'logo':this.getCleanedString(value.name+value.type.replace('/','.')).split('+')[0],
          }).subscribe(data=>{console.log(data)});
           
        }
      }
    );
  }  

  openImageDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir imagen',
        tituloAlerta:'Guardado realizado',
        mensaje:'Imagen banner ha sido editado exitosamente ',
      }
    });
  }

  openIconDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir icono',
        tituloAlerta:'Guardado realizado',
        mensaje:'Icono banner ha sido editado exitosamente ',
      }
    });
  }
}
