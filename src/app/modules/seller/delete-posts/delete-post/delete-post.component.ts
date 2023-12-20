import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/productModel';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletePostComponent>, private dialog: MatDialog) {
  }

  post:ProductModel=this.data;

  ruta:string=environment.imagesUrl
  
  close(): void {
    this.dialogRef.close(true);
  }

  openDeleteDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{data:[item]});
    
  }
}
