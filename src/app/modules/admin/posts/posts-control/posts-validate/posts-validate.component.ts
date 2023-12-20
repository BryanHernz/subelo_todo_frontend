import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ValidateComponent } from '../validate/validate.component';
import { MatDialog, } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ProductModel } from 'src/app/models/productModel';

@Component({
  selector: 'app-posts-validate',
  templateUrl: './posts-validate.component.html',
  styleUrls: ['./posts-validate.component.css']
})

export class PostsValidateComponent implements OnInit {

  @ViewChild(MatTable) tabla1!: MatTable<ProductModel>;
  posts: ProductModel[] = [];

  displayedColumns: string[] = ['fecha', 'publicador', 'telefono', 'mail', 'publicacion' ,'validar'];

  
  constructor(
    private dialog: MatDialog,private prodservice: ProductsService) {
  }

  ngOnInit(): void {
    this.prodservice.getProductsToApprove().subscribe(data=>{this.posts=data;})
  }

  openDialog(post:ProductModel) {
    const dialogRef = this.dialog.open(ValidateComponent,{data:post});
  }

}