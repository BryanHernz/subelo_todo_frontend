import { Component, OnInit } from '@angular/core';
import { RejectedSalesSeeMoreComponent } from '../rejected-sales-see-more/rejected-sales-see-more.component';
import { MatDialog } from '@angular/material/dialog';
import { OrderModel } from 'src/app/models/orderModel';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rejected-sales',
  templateUrl: './rejected-sales.component.html',
  styleUrls: ['./rejected-sales.component.css']
})
export class RejectedSalesComponent implements OnInit{

  sales:OrderModel[]=[]
  
  ruta:string=environment.imagesUrl

  constructor(private dialog: MatDialog, private orderservice: OrderService) {}

  ngOnInit(): void {
    this.orderservice.getOrdersRejectedBySeller(parseInt(localStorage.getItem("userId")!)).subscribe((data) => {
      
      this.sales = data.reverse();

      console.log(this.sales);
    });
  }
    
  openDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(RejectedSalesSeeMoreComponent,{data:order});
  }

}
