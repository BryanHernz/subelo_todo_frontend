import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderModel } from 'src/app/models/orderModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-purchases-see-more',
  templateUrl: './purchases-see-more.component.html',
  styleUrls: ['./purchases-see-more.component.css']
})
export class PurchasesSeeMoreComponent {

  order:OrderModel = this.data;
  ruta:string=environment.imagesUrl
  

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PurchasesSeeMoreComponent>, private dialog: MatDialog) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
  
}
