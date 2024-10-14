import { MedicalHistory } from './../../../model/medicalhistory.model';
import { MedicalhistoryService } from './../../../service/medicalhistory.service';
import { Component, OnInit } from '@angular/core';
import { Inpatient } from '../../../model/inpatient.model';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inpatient-medicalinfo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inpatient-medicalinfo.component.html',
  styleUrl: './inpatient-medicalinfo.component.css'
})
export class InpatientMedicalinfoComponent implements OnInit{
//[(ngModel)]="inpatient.id" (change)="onChange()"
  id:number;
    medicalCondition:string;
    sinceWhen:string;
    inpatient:Inpatient;
    
    medicalHistory:MedicalHistory = new MedicalHistory();
    constructor(private mhs:MedicalhistoryService){

    }
  ngOnInit(): void {
    
    this.mhs.medicalinfo$.subscribe(medicalHistory=>{
      this.medicalCondition = medicalHistory.medicalCondition;
      this.sinceWhen = medicalHistory.sinceWhen;
      //this.inpatient.id = medicalHistory.inpatient.id;
    })
    
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        this.medicalHistory.file = file;  // Assign selected file to medical history
        this.onChange();
    }
  }
  onChange(){
    const updatedMedicalHistory = new MedicalHistory();
    updatedMedicalHistory.medicalCondition=this.medicalCondition;
    updatedMedicalHistory.sinceWhen=this.sinceWhen;
    //updatedMedicalHistory.inpatient.id=this.inpatient.id;
    updatedMedicalHistory.file = this.medicalHistory.file;

    this.mhs.setInpatient(updatedMedicalHistory);

    // Create a new instance of Inpatient with updated values
   /* const updatedPatient = new Inpatient();
    updatedPatient.name = this.name;
    updatedPatient.phoneNumber = this.phoneNumber;
    updatedPatient.gender = this.gender;
    updatedPatient.age = this.age;
    updatedPatient.bloodgroup = this.bloodgroup;
    updatedPatient.address = this.address;
    updatedPatient.user = this.user;
  
    // Update the BehaviorSubject with the new Inpatient instance
    this.patientservice.setInpatient(updatedPatient);*/

  }

}
