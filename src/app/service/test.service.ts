import { AddPrescriptionToinpatientComponent } from './../component/executive/add-prescription-toinpatient/add-prescription-toinpatient.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAllTestNames():Observable<any>{
    const url='http://localhost:8082/testnames';
    return this.http.get(url);
  }
  
  getTestByTestName(testname:string):Observable<any>{
    const url=`http://localhost:8082/test/getall/${testname}`;
     return this.http.get(url,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  assigntest(pid:number,did:number,testid:number):Observable<any>{
    const url=`http://localhost:8082/inpatienttest/add/${pid}/${did}/${testid}`;
    return  this.http.post(url,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
     });
  }

  inpatientTestGetAll(page:number,size:number):Observable<any>{
    const url='http://localhost:8082/inpatienttest/getall?page='+page+'&size='+size;
    return this.http.get(url,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }
  uploadTestResult(formData:FormData,id:any){
    const url=`http://localhost:8082/testresult/add/${id}`;
    return this.http.post(url,formData)
  }

  addPrescriptionToinpatient(pid:number,did:number,obj:any):Observable<any>{
    const url=`http://localhost:8082/inpatient-add-prescription/${pid}/${did}`;
       return this.http.post(url,obj,{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
       })
  }

}
