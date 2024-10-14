import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpdService implements OnInit {
  

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  addopdpatient(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/patient-opd/add',obj,{
    }
   )
  }
}
