import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-question-category',
  templateUrl: './add-question-category.component.html',
  styleUrls: ['./add-question-category.component.css']
})
export class AddQuestionCategoryComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddQuestionCategoryComponent>,private frequentserv:FrequentService) {}

  newfaqcat=new FormGroup({
    name:new FormControl(''),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  
  postcat():void{
    this.frequentserv.saveQuestionCategory({'name':this.newfaqcat.value.name!,}).subscribe(data=>{console.log(data),window.location.reload()});
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
