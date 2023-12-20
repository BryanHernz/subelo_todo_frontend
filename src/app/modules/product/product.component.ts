import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/models/product";
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ProductCard } from 'src/app/shared/models/product-card';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ProductModel } from 'src/app/models/productModel';
import { ShoppingCartService } from 'src/app/services/cartservice/shopping-cart.service';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsProductComponent } from 'src/app/shared/components/questions-product/questions-product.component';
import { environment } from 'src/environments/environment';

interface GalleriaImage{
  URL:String;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{

  ruta:string=environment.imagesUrl

  img: GalleriaImage[] = [];

  userId : number = parseInt(localStorage.getItem("userId")!);
  id!: number;
  product!: ProductModel;
  enable:boolean=true;
  products:ProductModel[] = [];

  constructor(private route: ActivatedRoute,private productserv:ProductsService,private cartservice:ShoppingCartService,private dialog: MatDialog,) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")!);
      this.productserv.getProduct(this.id).subscribe(data => {
      this.product = data;
      for (const key in this.product.ProductImages) {
        this.img.push({ URL: this.ruta + this.product.ProductImages.at(parseInt(key))?.filePath });
      }
      
      this.stockValid()
    })
    this.productserv.getProductsHome().subscribe((data:ProductModel[])=>{
      this.products = data;
    }),
      console.log(this.img)
  }

  showQuestions(product:ProductModel){
    const dialogRef = this.dialog.open(QuestionsProductComponent,{data:product});
  }

  stockValid(){
    this.cartservice.getShoppingCartByUser(this.userId).subscribe(data=>{
      if (data.some(prod => prod.product!.id == this.product.id!)) {
        
        console.log('calasaaa')
      if ((data.find(dat=>dat.productId==this.product.id)!.amount)==this.product.stock) {
        this.enable=false;
        console.log('false')
      }else{
        this.enable=true;
        console.log('ture')}
    }
    })
  }

  addToCart(){
    this.cartservice.getShoppingCartByUser(this.userId).subscribe(async data=>{
      if (data.some(prod => prod.productId ==this.product.id!)) {
        this.cartservice.putShoppingCartItem({
          'id':data.find(dat=>dat.productId==this.product.id&&dat.userId==this.userId)!.id,
          'amount':data.find(dat=>dat.productId==this.product.id&&dat.userId==this.userId)!.amount+1,
          'productId':this.product.id!,
          'userId':this.userId,
        }).subscribe();
      } else {
        this.cartservice.postShoppingCartItem(
          {
            'productId':this.product.id!,
            'amount':1,
            'userId':parseInt(localStorage.getItem("userId")!),
          }
        ).subscribe();
      }
    })
    this.stockValid()
  }

  productsCards: ProductCard [] = [
    {
      id: 1,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/computador imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
    {
      id: 2,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/iphone imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
    {
      id: 3,
      name: 'Hamaca de flores rojas familiar XL',
      country: '',
      date: '', // ???
      photo: 'assets/images/imagenes-productos/patines imagen.jpg',
      price: 45000,
      currency: 'CLP',
    },
  ];
}
