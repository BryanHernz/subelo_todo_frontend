import { Component, OnInit } from '@angular/core';
import { ProductCard } from "../../shared/models/product-card";
import { CarouselModule } from 'primeng/carousel';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ProductModel } from 'src/app/models/productModel';
import { BannersService } from 'src/app/services/bannerservice/banners.service';
import { BannerModel } from 'src/app/models/bannerModel';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private prodservice:ProductsService,private bannerservice:BannersService) { }
  
  ruta:string=environment.imagesUrl

  products:ProductModel[] = [];
  descuentos:ProductModel[] = [];
  banners:BannerModel[] = [];

  ngOnInit(): void {
    this.prodservice.getProductsHome().subscribe((data:ProductModel[])=>{
      this.products = data;
    }),
    this.prodservice.getProductsDiscount().subscribe((data:ProductModel[])=>{
      this.descuentos = data;
    })
    this.bannerservice.getBanners().subscribe((data:BannerModel[])=>{
      this.banners = data;
    })
  }

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ]
  
}
