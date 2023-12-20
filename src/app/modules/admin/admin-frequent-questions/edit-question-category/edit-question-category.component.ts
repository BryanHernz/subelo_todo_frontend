import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { AddQuestionCategoryComponent } from '../add-question-category/add-question-category.component';

@Component({
  selector: 'app-edit-question-category',
  templateUrl: './edit-question-category.component.html',
  styleUrls: ['./edit-question-category.component.css']
})
export class EditQuestionCategoryComponent {

  category:FrequentQuestionCategoryModel=this.data;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddQuestionCategoryComponent>,private frequentserv:FrequentService) {}

  editfaqcat=new FormGroup({
    name:new FormControl(this.category.name),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  
  putcat():void{
    this.frequentserv.putQuestionCategory({'id':this.category.id,'name':this.editfaqcat.value.name!,}).subscribe(data=>{console.log(data),window.location.reload()});
    this.close();
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Cambios realizados',
        mensaje: 'Se han guardado los cambios realizados en preguntas frecuentes',
        tipo:'confirmacion',
      }
    });
    this.close();
  }
}
