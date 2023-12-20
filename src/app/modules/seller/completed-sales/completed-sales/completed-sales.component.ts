import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompletedSalesSeeMoreComponent } from '../completed-sales-see-more/completed-sales-see-more.component';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { OrderModel } from 'src/app/models/orderModel';
import { DeliverSellComponent } from '../deliver-sell/deliver-sell.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-completed-sales',
  templateUrl: './completed-sales.component.html',
  styleUrls: ['./completed-sales.component.css']
})
export class CompletedSalesComponent implements OnInit{

  sales:OrderModel[]=[]
  
  ruta:string=environment.imagesUrl

  constructor(private dialog: MatDialog, private orderservice: OrderService) {}

  ngOnInit(): void {
    this.orderservice.getOrdersBySeller(parseInt(localStorage.getItem("userId")!)).subscribe((data) => {
      this.sales = data.reverse();
      console.log(this.sales);
    });
  }

    
  openDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(CompletedSalesSeeMoreComponent,{data:order});
  }

  openDeliverDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(DeliverSellComponent,{data:order});
  }


}
