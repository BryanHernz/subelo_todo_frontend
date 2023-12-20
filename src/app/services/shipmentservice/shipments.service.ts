import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { ShipmentModel } from 'src/app/models/shipmentModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ShipmentsService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }

  getShipments(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment';
    return this.http.get<ShipmentModel[]>(direction,{headers});
  }

  getShipment(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/'+id;
    return this.http.get<ShipmentModel>(direction,{headers});
  }

  checkToken(token: string){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/check/'+token;
    return this.http.get<boolean>(direction,{headers});
  }

  getShipmentByUser(userId: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/byUser/'+userId;
    return this.http.get<ShipmentModel[]>(direction,{headers});
  }

  putShipment(form:ShipmentModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  deleteShipment(form:ShipmentModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

  postShipment(form:ShipmentModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/shipment/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
