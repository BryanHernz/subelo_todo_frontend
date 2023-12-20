import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { FrequentQuestionModel } from 'src/app/models/frequentQuestionModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-frequent-questions',
  templateUrl: './edit-frequent-questions.component.html',
  styleUrls: ['./edit-frequent-questions.component.css']
})
export class EditFrequentQuestionsComponent {

  multipleImages = [];

  ruta:string=environment.imagesUrl

  question:FrequentQuestionModel=this.data;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditFrequentQuestionsComponent>,private frequentserv:FrequentService) {}

  editfaq=new FormGroup({
    question:new FormControl(this.question.question),
    answer:new FormControl(this.question.answer),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  
  postquest():void{
    if (this.editfaq.valid) {
      if (this.multipleImages.length==0) {
        this.frequentserv.putQuestion({'id':this.question.id,'question':this.editfaq.value.question!,'answer':this.editfaq.value.answer!,'image':this.question.image,'faqCategoryId':this.question.faqCategory?.id}).subscribe(data=>{console.log(data),window.location.reload()});
      } else {
        this.onImageSubmit();
      }
    } 
    
  }

  generarNumeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  selectImage(ident:number,event:any){
    this.multipleImages = [];
    this.multipleImages = event.target.files;
  }

  onImageSubmit(){
    const formData = new FormData();
      formData.append('files', this.multipleImages[0], this.question.faqCategory!.id+this.editfaq.value.question!.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    
      this.frequentserv.postQuestionImage(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          this.frequentserv.putQuestion({'id':this.question.id,'question':this.editfaq.value.question!,'answer':this.editfaq.value.answer!,'image':value.name+value.type.replace('/','.'),'faqCategoryId':this.question.faqCategory!.id}).subscribe(data=>{console.log(data),window.location.reload()});
        }
      }
    );
  }  

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Cambios realizados',
        mensaje: 'Se ha modificado la preguntas frecuente',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
