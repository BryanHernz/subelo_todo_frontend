import { Component, OnInit } from '@angular/core';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css']
})
export class FrequentQuestionsComponent implements OnInit {

  preguntasfreq:FrequentQuestionCategoryModel[]=[];

  constructor(private categoryquestion:FrequentService) { } 

  ngOnInit(): void {
    this.categoryquestion.getFrequentQuestionsCategories().subscribe(data=>{
      this.preguntasfreq=data;
    });
  }
}
