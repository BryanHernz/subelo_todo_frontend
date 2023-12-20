import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerModel } from 'src/app/models/bannerModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  API_URI = environment.urlBase;

  constructor(private http: HttpClient) { }
  
  getBanners(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/banners/';
    return this.http.get<BannerModel[]>(direction,{headers});
  }

  saveBanner(form:BannerModel):Observable<ResponseModel>{
    console.log(form)
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/banners/'+form.id;
    return this.http.put<ResponseModel>(direction,form,{headers});
  }

  postBannerImage(form:FormData):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/banners/multipleFiles';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
