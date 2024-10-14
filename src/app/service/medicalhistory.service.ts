import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MedicalHistory } from '../model/medicalhistory.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalhistoryService {
  constructor(private http:HttpClient ) {

   }
  medicalinfo$=new BehaviorSubject<MedicalHistory>(new MedicalHistory());
  // Method to update the Inpatient object
  setInpatient(mh: MedicalHistory): void {
    this.medicalinfo$.next(mh);
  }
   
  uploadMedicalDocuments(formData:FormData,pid:any):Observable<any>{
    const url=`http://localhost:8082/medicalhistory/upload/${pid}`;
    return this.http.post(url,formData)

  }
  
  
  
}
