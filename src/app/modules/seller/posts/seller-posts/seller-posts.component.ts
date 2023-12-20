import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeeMoreComponent } from '../see-more/see-more.component';
import { ProductModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seller-posts',
  templateUrl: './seller-posts.component.html',
  styleUrls: ['./seller-posts.component.css']
})
export class SellerPostsComponent implements OnInit {
  allChecked:boolean;
  checkedList:any;
  posts:ProductModel[]=[];
  productos:ProductModel[]=[];
  
  ruta:string=environment.imagesUrl

  constructor(private dialog: MatDialog,private productserv:ProductsService) {
    this.allChecked=false;
    //this.getCheckedItemList();
  }
  
  checkUncheckAll() {
    if (this.allChecked) {
      this.posts=this.productos;
    } else {
      this.posts=[];
    }
  }

  isSelected(item:ProductModel):boolean{
    if (this.posts.includes(item)) {
      return true;
    } else {
      return false;
    }
  }

  checkChecked(item:ProductModel) {
    if (this.posts.includes(item)) {
      this.posts=this.posts.filter((e, i) => e !== item);
    } else {
      this.posts.push(item);
    }
    if (this.posts.length==this.productos.length) {
      this.allChecked=true
    }
  }

  ngOnInit():void{
      const userId=parseInt(localStorage.getItem("userId")!)
      this.productserv.getProductsByUser(userId).subscribe(data=>{
        this.productos=data;
      })
    
  }

  openDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(SeeMoreComponent,{data:item});
  }

  openDeleteDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{data:[item]});
  }

  openDeleteMultiDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{data:this.posts});
  }

}
