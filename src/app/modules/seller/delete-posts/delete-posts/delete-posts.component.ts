import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { DeletePostsSeeMoreComponent } from '../delete-posts-see-more/delete-posts-see-more.component';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { ProductModel } from 'src/app/models/productModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-posts',
  templateUrl: './delete-posts.component.html',
  styleUrls: ['./delete-posts.component.css']
})
export class DeletePostsComponent {
  
  posts:ProductModel[]=[];
  
  ruta:string=environment.imagesUrl

  constructor(private dialog: MatDialog,private productserv:ProductsService) {}

  ngOnInit():void{
    const userId=parseInt(localStorage.getItem("userId")!)
    this.productserv.getProductsByUser(userId).subscribe(data=>{
      this.posts=data;
    })
  }
    
  openDeleteDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(DeletePostComponent,{data:item});
  }  

  openSeeMoreDialog(item:ProductModel) {
    const dialogRef = this.dialog.open(DeletePostsSeeMoreComponent,{data:item});
  }


}
