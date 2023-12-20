import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderModel } from 'src/app/models/orderModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-completed-sales-see-more',
  templateUrl: './completed-sales-see-more.component.html',
  styleUrls: ['./completed-sales-see-more.component.css']
})
export class CompletedSalesSeeMoreComponent {

  order:OrderModel = this.data;
  
  ruta:string=environment.imagesUrl

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CompletedSalesSeeMoreComponent>, private dialog: MatDialog) {
    
  }

  close(): void {
    this.dialogRef.close(true);
  }
  
}
