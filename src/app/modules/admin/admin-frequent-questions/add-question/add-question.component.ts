import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  multipleImages = [];

  categoria:FrequentQuestionCategoryModel=this.data;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddQuestionComponent>,private frequentserv:FrequentService) {}

  newfaq=new FormGroup({
    question:new FormControl(''),
    answer:new FormControl(''),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  
  postquest():void{
    if (this.newfaq.valid) {
      if (this.multipleImages.length==0) {
        this.frequentserv.saveQuestion({'question':this.newfaq.value.question!,'answer':this.newfaq.value.answer!,'image':'','faqCategoryId':this.categoria.id}).subscribe(data=>{console.log(data),window.location.reload()});
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
      formData.append('files', this.multipleImages[0], this.categoria.id+this.newfaq.value.question!.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    
      this.frequentserv.postQuestionImage(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          this.frequentserv.saveQuestion({'question':this.newfaq.value.question!,'answer':this.newfaq.value.answer!,'image':value.name+value.type.replace('/','.'),'faqCategoryId':this.categoria.id}).subscribe(data=>{console.log(data),window.location.reload()});
        }
      }
    );
  }  

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Cambios realizados',
        mensaje: 'Se ha en preguntas frecuentes',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
