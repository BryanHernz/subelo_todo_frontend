import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderModel } from 'src/app/models/orderModel';
import { OrderService } from 'src/app/services/orderservice/order.service';

@Component({
  selector: 'app-deliver-sell',
  templateUrl: './deliver-sell.component.html',
  styleUrls: ['./deliver-sell.component.css']
})
export class DeliverSellComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeliverSellComponent>,private orderservice:OrderService) {
    
  }

  orden:OrderModel=this.data;
  
  close(): void {
    this.dialogRef.close();
  }

  entregar(){
      this.orderservice.putOrder({
        id:this.orden.id,
        userId:this.orden.userId,
        productId:this.orden.productId,
        shipmentId:this.orden.shipmentId,
        orderStateId:2,
        rejectedTitle:this.orden.rejectedTitle,
        rejectedDescription:this.orden.rejectedDescription,
        price:this.orden.price,
        sellerPaid:this.orden.sellerPaid,
        createdAt:this.orden.createdAt,
        updatedAt:this.orden.updatedAt,
        deletedAt:this.orden.deletedAt
      }).subscribe(data=>{console.log(data)
      this.close();
      
   });
      
    window.location.reload()
  }
}
