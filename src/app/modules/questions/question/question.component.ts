import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FrequentQuestionModel } from 'src/app/models/frequentQuestionModel';
import { FrequentService } from 'src/app/services/frequentservice/frequent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private route:ActivatedRoute,private questionservice:FrequentService) { }
  
  ruta:string=environment.imagesUrl

  id!:number;

  question!:FrequentQuestionModel;

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")!);
      this.questionservice.getFrequentQuestion(this.id).subscribe(data => {
      this.question = data;
      console.log(this.question)
    })
  }

}
