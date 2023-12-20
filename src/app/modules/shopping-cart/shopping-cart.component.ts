import { CurrencyPipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { ShoppingCartService } from 'src/app/services/cartservice/shopping-cart.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  @ViewChild('webpayForm') webpayForm!: ElementRef;
  
  ruta:string=environment.imagesUrl

  productos:ShoppingCartModel[]=[];
  total : number = 0;
  userId : number = parseInt(localStorage.getItem("userId")!);
  responseWebpay : any = {
    url: '',
    token: ''
  };

  constructor(private route: ActivatedRoute,private productserv:ProductsService,private cartservice:ShoppingCartService){}

  ngOnInit(): void {
    this.cartservice.getShoppingCartByUser(this.userId).subscribe(data=>{
      this.productos=data;
      
    this.checkStock()
      this.calcularTotal()
      console.log(data)
    })
  }

  deleteItem(index: ShoppingCartModel) {
    this.cartservice.deleteShoppingCartItem(index).subscribe(data=>{
      let i = this.productos.indexOf(index);
      this.productos.splice(i, 1);
      this.calcularTotal();
      // console.log(data);
      // window.location.reload()
    })
  }

  tbkProcess(){
    this.checkStock()
    this.dicountStock()
    let url = "http://localhost:4200/posttbk/";
    let data = {id: this.userId ,amount: this.total, url}

    this.cartservice.createWebpay(data).subscribe(data=>{
      this.responseWebpay = data;
      console.log(data.token)
      setTimeout(() => {
        this.webpayForm.nativeElement.submit();
      }, 50);
    })
  }

  checkStock(){
    this.productos.forEach( (value) => {
      this.productserv.getProduct(value.productId).subscribe(data=>{if (data.stock<value.amount) {
        this.deleteItem(value)
      }})
    }); 
  }

  dicountStock(){
    console.log(this.productos)
    for (const prod of this.productos) {
      prod.product!.stock=prod.product!.stock-prod.amount;
      this.productserv.putProduct({
        'id':prod.productId,
        'title':prod.product!.title!,
        'subcategoryId':prod.product!.subcategoryId!,
        'categoryId':prod.product!.categoryId!,
        'cityId':prod.product!.cityId!,
        'stateId':prod.product!.stateId!,
        'description':prod.product!.description!,
        'condition':prod.product!.condition!,
        'saleState':prod.product!.saleState!,
        'referencialPrice':prod.product!.referencialPrice!,
        'stock':prod.product!.stock!,
        'price':prod.product!.price!,
        'userId':prod.product!.userId,
        'discount':prod.product!.discount!,
        'approved':prod.product!.approved,
        'height':prod.product!.height!,
        'length':prod.product!.length!,
        'width':prod.product!.width!,
        'weight':prod.product!.weight!,
      }).subscribe(data=>{console.log(data)
      })
    }
    console.log(this.productos)
  }

  calcularTotal() {
    this.total = 0;
    for (const prod of this.productos) {
      this.total += (prod?.product!.price*prod.amount) ?? 0;
    }
  }
}

