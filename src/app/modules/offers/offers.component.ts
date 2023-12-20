import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/categoryModel';
import { ProductModel } from 'src/app/models/productModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {

  categories:CategoryModel[]=[];
  
  ruta:string=environment.imagesUrl

  constructor(private productserv:ProductsService, private categoryserv:CategoriesService) {
    
  }

  ngOnInit():void{
      this.categoryserv.getCategoriesOffers().subscribe(data=>{
        this.categories=data;
      })
    
  }

}
