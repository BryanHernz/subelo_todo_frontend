import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationModel } from 'src/app/models/notificationModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  API_URI = environment.urlBase;

  userId:string=localStorage.getItem("userId")!;

  constructor(private http: HttpClient) { }
  
  getUserNotifications(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/notifications/'+this.userId;
    return this.http.get<NotificationModel[]>(direction,{headers});
  }

  postNotification(form:NotificationModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/notifications/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  saveNotification(form:NotificationModel):Observable<ResponseModel>{
    console.log(form)
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/notifications/'+this.userId;
    return this.http.put<ResponseModel>(direction,form,{headers});
  }

  deleteNotification(id:string):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/notifications/'+id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }
}
