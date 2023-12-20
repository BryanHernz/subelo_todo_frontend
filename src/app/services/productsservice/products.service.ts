import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProductModel } from '../../models/productModel'
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { ProductImageModel } from 'src/app/models/productImage';
import { environment } from '../../../environments/environment';
import { QuestionModel } from 'src/app/models/questionModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getProducts(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products';
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsToApprove(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/toApprove';
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsHome(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/toHome';
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsDiscount(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/toDiscount';
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProduct(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byId/'+id;
    return this.http.get<ProductModel>(direction,{headers});
  }

  getProductsByCategory(categoryId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byCategory/'+categoryId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsBySubategory(subcategoryId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/bySubcategory/'+subcategoryId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByState(stateId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byState/'+stateId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByCity(cityId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byCity/'+cityId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByUser(userId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byUser/'+userId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  putProduct(form:ProductModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  deleteProduct(form:ProductModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

  postProduct(form:ProductModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  postProductImages(form:FormData):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/multipleFiles';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
  
  postProductImage(form:ProductImageModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/post/';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  getImagesByProduct(productId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/byProductId/'+productId;
    return this.http.get<ProductImageModel[]>(direction,{headers});
  }

  putQuestion(form:QuestionModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/questions/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  postQuestion(form:QuestionModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/questions/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
