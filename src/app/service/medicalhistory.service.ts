import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicalHistory } from '../model/medicalhistory.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalhistoryService {
  medicalinfo$=new BehaviorSubject<MedicalHistory>(new MedicalHistory());
  // Method to update the Inpatient object
  setInpatient(mh: MedicalHistory): void {
    this.medicalinfo$.next(mh);
  }
  
  
  constructor( ) { }
}
