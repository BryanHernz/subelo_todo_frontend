import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NotificationModel } from 'src/app/models/notificationModel';
import { ProductModel } from 'src/app/models/productModel';
import { NotificationsSeeMoreComponent } from 'src/app/modules/seller/notifications/notifications-see-more/notifications-see-more.component';
import { ProductsService } from 'src/app/services/productsservice/products.service';

@Component({
  selector: 'app-questions-product',
  templateUrl: './questions-product.component.html',
  styleUrls: ['./questions-product.component.css']
})
export class QuestionsProductComponent {

  userId : number = parseInt(localStorage.getItem("userId")!);

  product:ProductModel=this.data;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<QuestionsProductComponent>, private dialog: MatDialog,private questionservice:ProductsService) {
  }

  newQuestion=new FormGroup({
    question:new FormControl(''),
  })

  newAnswer=new FormGroup({
    answer:new FormControl(''),
  })

  sendQuestion(){
    if (this.newQuestion.valid) {
      this.questionservice.postQuestion({
        productId: this.product.id!, userId: this.userId,
        question: this.newQuestion.value.question!, answer: ''
      }).subscribe(data=>{
        console.log(data);
        window.location.reload();
      })
    }
  }

  sendAnswer(id:number,question:String){
    if (this.newQuestion.valid) {
      this.questionservice.putQuestion({
        id:id,
        productId: this.product.id!, userId: this.userId,
        answer: this.newAnswer.value.answer!,
        question: question,
      }).subscribe(data=>{
        console.log(data);
        window.location.reload();
      })
    }
  }

  close(): void {
    this.dialogRef.close(true);
  }

}
