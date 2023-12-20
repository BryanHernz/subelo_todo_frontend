import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orderModel';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-reject-purchase',
  templateUrl: './reject-purchase.component.html',
  styleUrls: ['./reject-purchase.component.css']
})
export class RejectPurchaseComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<RejectPurchaseComponent>,
    private orderservice:OrderService) {
    
  }

  orden:OrderModel=this.data;  
  errorStatus:boolean=false;
  errorMsj:any;

  newreject=new FormGroup({
    rejectedTitle:new FormControl(''),
    rejectedDescription:new FormControl(),})

    reject(){
      if (this.newreject.valid) {
        this.orden.rejectedTitle=this.newreject.value.rejectedTitle!;
        this.orden.rejectedDescription=this.newreject.value.rejectedDescription;
        this.orden.orderStateId=3;
          this.orderservice.putOrder({
            id:this.orden.id,
            userId:this.orden.userId,
            productId:this.orden.productId,
            shipmentId:this.orden.shipmentId,
            orderStateId:this.orden.orderStateId,
            rejectedTitle:this.orden.rejectedTitle,
            rejectedDescription:this.orden.rejectedDescription,
            price:this.orden.price,
            sellerPaid:this.orden.sellerPaid,
            createdAt:this.orden.createdAt,
            updatedAt:this.orden.updatedAt,
            deletedAt:this.orden.deletedAt
          }).subscribe(data=>{console.log(data)
          this.close();
          
          this.openDialog();
       });
        
      
    }else {
      this.errorStatus=true;
      this.errorMsj='Por favor complete todos los campos';
    }}

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Compra rechazada',
        mensaje: 'la compra se ha registrado como rechazada',
        tipo:'confirmacion',
      }
    });
    this.close();window.location.reload();
  }

}
