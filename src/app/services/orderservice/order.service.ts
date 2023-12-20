import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/models/orderModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getOrders(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order';
    return this.http.get<OrderModel[]>(direction,{headers});
  }

  getOrder(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/'+id;
    return this.http.get<OrderModel>(direction,{headers});
  }

  getOrdersByUser(userId: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/byUser/'+userId;
    return this.http.get<OrderModel[]>(direction,{headers});
  }

  getOrdersBySeller(sellerId: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/bySeller/'+sellerId;
    return this.http.get<OrderModel[]>(direction,{headers});
  }
  
  getOrdersRejectedBySeller(sellerId: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/bySellerRejected/'+sellerId;
    return this.http.get<OrderModel[]>(direction,{headers});
  }

  putOrder(form:OrderModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  deleteOrder(form:OrderModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

  postOrder(form:OrderModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/order/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
