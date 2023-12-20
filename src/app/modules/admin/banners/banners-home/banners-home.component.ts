import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerModel } from 'src/app/models/bannerModel';
import { BannersService } from 'src/app/services/bannerservice/banners.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { EditBannerComponent } from 'src/app/shared/components/edit-banner/edit-banner.component';
import { UploadImageComponent } from 'src/app/shared/components/upload-image/upload-image.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banners-home',
  templateUrl: './banners-home.component.html',
  styleUrls: ['./banners-home.component.css']
})

export class BannersHomeComponent implements OnInit {
  banners :BannerModel[]=[];

  constructor(private dialog: MatDialog,private bannerservice: BannersService, private prodservice: ProductsService) {
  }
  
  ruta:string=environment.imagesUrl

 
  ngOnInit(): void {
    this.bannerservice.getBanners().subscribe(data=>{
      this.banners=data;
    })
  }

  multipleImages = [];

  openDialog(banner: BannerModel) {
    const dialogRef = this.dialog.open(EditBannerComponent,{
      data: banner
    });
  }

  generarNumeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  selectImage(ident:number,event:any){
    this.multipleImages = [];
    this.multipleImages = event.target.files;
    console.log(ident+'---');
    this.onMultipleSubmit(ident);
  }

  onMultipleSubmit(ident:number){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img, ident+this.banners.at(ident)!.title!.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    }
      this.bannerservice.postBannerImage(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          console.log(ident);
          this.bannerservice.saveBanner({
            'id':ident,
            
            'banner':value.name+value.type.replace('/','.'),
          }).subscribe(data=>{console.log(data),window.location.reload()});
           
        }
      }
    );
  }  

  /*openImageDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir imagen',
        tituloAlerta: 'Imagen subida',
        mensaje: 'La imagen se ha subido exitosamente ',
      }
    });
  }*/


}
