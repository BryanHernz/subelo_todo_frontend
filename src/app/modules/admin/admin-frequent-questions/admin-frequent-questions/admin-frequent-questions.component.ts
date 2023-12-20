import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFrequentQuestionsComponent } from '../edit-frequent-questions/edit-frequent-questions.component';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { AddQuestionCategoryComponent } from '../add-question-category/add-question-category.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { EditQuestionCategoryComponent } from '../edit-question-category/edit-question-category.component';
import { FrequentQuestionModel } from 'src/app/models/frequentQuestionModel';

@Component({
  selector: 'app-admin-frequent-questions',
  templateUrl: './admin-frequent-questions.component.html',
  styleUrls: ['./admin-frequent-questions.component.css']
})
export class AdminFrequentQuestionsComponent implements OnInit {

  preguntasfreq:FrequentQuestionCategoryModel[]=[];

  constructor(private dialog: MatDialog,private categoryquestion:FrequentService) { } 

  ngOnInit(): void {
    this.categoryquestion.getFrequentQuestionsCategories().subscribe(data=>{
      this.preguntasfreq=data;
    });
  }

  secciones=[
    {nombre:'Administrar publicaciones',preguntas:['Publicaciones ','Modificación de publicación','Quitar publicaciones']},
    {nombre:'Todo relacionado a ventas',preguntas:['Ventas , cobros y envíos ','Vendedores','Cancelaciones de compra']},
    {nombre:'Pagos',preguntas:['Facturación  ','Pagos','Devolución de dinero']},
  ]

  openDialog() {
    const dialogRef = this.dialog.open(EditFrequentQuestionsComponent);
  }

  addcategoryquestion(){
    const dialogRef = this.dialog.open(AddQuestionCategoryComponent);
  }
  
  addquestion(item:FrequentQuestionCategoryModel){
    const dialogRef = this.dialog.open(AddQuestionComponent,{data:item});
  }

  editCategory(item:FrequentQuestionCategoryModel){
    const dialogRef = this.dialog.open(EditQuestionCategoryComponent,{data:item});
  }

  deleteCategory(item:FrequentQuestionCategoryModel){
    this.categoryquestion.deleteCatQuestion(item).subscribe(data=>{item.faqs!.forEach(element => {this.categoryquestion.deleteQuestion(element).subscribe(data=>{console.log(data)})});window.location.reload()});
  }

  editquestion(item:FrequentQuestionModel){
    const dialogRef = this.dialog.open(EditFrequentQuestionsComponent,{data:item});
  }

  deletequestion(item:FrequentQuestionModel){
    this.categoryquestion.deleteQuestion(item).subscribe(data=>{window.location.reload()});
  }
}
