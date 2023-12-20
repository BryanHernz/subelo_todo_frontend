import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentModel } from 'src/app/models/shipmentModel';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { ShoppingCartService } from 'src/app/services/cartservice/shopping-cart.service';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ShipmentsService } from 'src/app/services/shipmentservice/shipments.service';
import { Router } from '@angular/router'
import { TbkResultModel } from 'src/app/models/tbkResultModel';
//const WebpayPlus = require("transbank-sdk").WebpayPlus; // CommonJS
//const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = require("transbank-sdk"); // CommonJS

@Component({
  selector: 'app-post-tbk',
  templateUrl: './post-tbk.component.html',
  styleUrls: ['./post-tbk.component.css']
})
export class PostTbkComponent implements OnInit {

  token!: string;
  tbkResult!:TbkResultModel;
  tbk_token!:string;
  productos:ShoppingCartModel[]=[];
  userId : number = parseInt(localStorage.getItem("userId")!);

  constructor(private route: ActivatedRoute,private productserv:ProductsService,private cartservice:ShoppingCartService,private orderservice:OrderService, private shipmentservice:ShipmentsService, private router:Router) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.token = params['token_ws'];this.tbk_token = params['TBK_TOKEN'];
    });
    await this.cartservice.getShoppingCartByUser(this.userId).subscribe(data=>{
      this.productos=data;
    if (this.token!=undefined) {
      this.shipmentservice.checkToken(this.token).subscribe(state=>{
        if (state) {
          
      this.router.navigate(['shopping-cart'])
          console.log('este token ya fue ingresado')
        } else {
          this.cartservice.stateWebpay(this.token).subscribe(data=>{
            this.tbkResult = data;
            this.shipmentservice.postShipment(
              {
                'amount': data.amount,
                'userId': parseInt(localStorage.getItem("userId")!),
                'token': this.token,
                'vci': data.vci,
                'status': data.status,
                'buyOrder': data.buy_order,
                'sessionId': data.session_id,
                'cardNumber': data.card_detail.card_number,
                'accountingDate': data.accounting_date,
                'transactionDate': data.transaction_date,
                'autorizationCode': data.authorization_code,
                'paymentTypeCode': data.payment_type_code,
                'responseCode': data.response_code,
                'installmentsNumber': data.installments_number,
              }
            ).subscribe(shipm=>{
              console.log(this.productos.length)
              for (let index = 0; index < this.productos.length; index++) {
                console.log(this.productos.at(index)!.amount)
                for (let item = 0; item < this.productos.at(index)!.amount; item++) {
                  this.orderservice.postOrder({
                    userId: parseInt(localStorage.getItem("userId")!),
                    productId: this.productos.at(index)!.productId,
                    shipmentId: parseInt(shipm.id),
                    orderStateId: 1,
                    rejectedTitle: '',
                    rejectedDescription: '',
                    price: this.productos.at(index)!.product!.price,
                    sellerPaid: false,
                  }).subscribe(orders=>{
                    this.productos.forEach(prod=>{this.cartservice.deleteShoppingCartItem(prod).subscribe()})
                  })
                }
              }
            })
          })
        }
      })
    }
    else
    {
      this.putStockBack()
    }
    }
    )
  }

  putStockBack(){
    for (const prod of this.productos) {
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
        'stock':(prod.product!.stock!+prod.amount),
        'price':prod.product!.price!,
        'userId':prod.product!.userId,
        'discount':prod.product!.discount!,
        'approved':prod.product!.approved,
        'height':prod.product!.height!,
        'length':prod.product!.length!,
        'width':prod.product!.width!,
        'weight':prod.product!.weight!,
      }).subscribe();
      
    }
  }
}
