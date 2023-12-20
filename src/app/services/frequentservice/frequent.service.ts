import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrequentQuestionCategoryModel } from 'src/app/models/frequentQuestionCategoryModel';
import { FrequentQuestionModel } from 'src/app/models/frequentQuestionModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrequentService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getFrequentQuestionsCategories(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqsCategories/';
    return this.http.get<FrequentQuestionCategoryModel[]>(direction,{headers});
  }

  getFrequentQuestion(id:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqs/byId/'+id;
    return this.http.get<FrequentQuestionModel>(direction,{headers});
  }

  saveQuestion(form:FrequentQuestionModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqs/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  saveQuestionCategory(form:FrequentQuestionCategoryModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqsCategories/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  putQuestion(form:FrequentQuestionModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqs/'+form.id;
    return this.http.put<ResponseModel>(direction,form,{headers});
  }

  putQuestionCategory(form:FrequentQuestionCategoryModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqsCategories/'+form.id;
    return this.http.put<ResponseModel>(direction,form,{headers});
  }
  
  postQuestionImage(form:FormData):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqs/multipleFiles';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
  
  deleteCatQuestion(form:FrequentQuestionCategoryModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqsCategories/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }
  
  deleteQuestion(form:FrequentQuestionModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/faqs/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

}
