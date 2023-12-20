import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,private prodservice: ProductsService,
    private dialogRef: MatDialogRef<ValidateComponent>) {
  }

  post:ProductModel=this.data;
  
  ruta:string=environment.imagesUrl

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    this.post.approved=true;
    this.prodservice.putProduct({
      title: this.post.title, 
      description: this.post.description, 
      price: this.post.price, 
      approved: true,
      userId: this.post.userId, 
      categoryId: this.post.categoryId, 
      subcategoryId: this.post.subcategoryId, 
      stateId: this.post.stateId, 
      cityId: this.post.cityId, 
      height: this.post.height,
      weight: this.post.weight,
      width: this.post.width,
      length: this.post.length,
      id: this.post.id,
      discount: this.post.discount,
      stock: this.post.discount,
      condition: this.post.condition,
      saleState: this.post.saleState
    }).subscribe(data=>{console.log(data)});
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Validación realizada',
        mensaje: 'Haz validado la publicación:                               '+this.post.title.toUpperCase(),
        tipo:'confirmacion',
      }
    }
    );
    this.close();
  }

  openRejectDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Validación rechazada',
        mensaje: 'Haz rechazado la publicación:                                    Manta de lycra, dos plazas, algodón 200 hilos María Carmen de la Manzana                                       Producto no cumple con las normas de Súbelo todo, se enviará un mail a la persona con el rechazo de producto',
        tipo:'',
      }
    });
    this.close();
  }

}
