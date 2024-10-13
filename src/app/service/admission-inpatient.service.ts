import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionInpatientService {

  constructor(private http:HttpClient) { }


     getAllAdmissions(page:number,size:number):Observable<any>{
      const u='http://localhost:8082/getall/ad?page='+page+'&size='+size;
      return this.http.get(u,{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      })
      
    }
  
  
}
