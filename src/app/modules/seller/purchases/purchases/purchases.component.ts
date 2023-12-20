import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderModel } from 'src/app/models/orderModel';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { PurchasesSeeMoreComponent } from '../purchases-see-more/purchases-see-more.component';
import { RejectPurchaseComponent } from '../reject-purchase/reject-purchase.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent  implements OnInit{

  sales:OrderModel[]=[]
  today: Date = new Date(Date.now()-7);

  
  ruta:string=environment.imagesUrl

  constructor(private dialog: MatDialog, private orderservice: OrderService) {}

  ngOnInit(): void {
    this.orderservice.getOrdersByUser(parseInt(localStorage.getItem("userId")!)).subscribe((data) => {
      
      this.today.setDate(this.today.getDate() - 7);
      this.sales = data.reverse();

      console.log(this.sales);
      console.log(this.today)
    });
  }
    
  openDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(PurchasesSeeMoreComponent,{data:order});
  }

  openRejectDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(RejectPurchaseComponent,{data:order});
  }

}
