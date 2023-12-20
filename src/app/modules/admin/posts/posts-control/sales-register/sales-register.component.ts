import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { SalesRegisterSeeMoreComponent } from '../sales-register-see-more/sales-register-see-more.component';
import { OrderModel } from 'src/app/models/orderModel';
import { OrderService } from 'src/app/services/orderservice/order.service';

@Component({
  selector: 'app-sales-register',
  templateUrl: './sales-register.component.html',
  styleUrls: ['./sales-register.component.css']
})
export class SalesRegisterComponent implements OnInit{

  @ViewChild(MatTable) tabla1!: MatTable<OrderModel>;

  orders: OrderModel[] = [];

  displayedColumns: string[] = ['fecha', 'publicador', 'telefono', 'mail', 'publicacion' ,'informacion'];

  
  constructor(
    private dialog: MatDialog,private orderservice: OrderService) {
  }

  ngOnInit(): void {
    this.orderservice.getOrders().subscribe(data=>{this.orders=data.reverse();})
  }

  openDialog(order:OrderModel) {
    const dialogRef = this.dialog.open(SalesRegisterSeeMoreComponent,{data:order});
  }

}