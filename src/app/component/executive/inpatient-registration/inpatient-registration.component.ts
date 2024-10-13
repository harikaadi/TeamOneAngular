import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user.model';
import { Inpatient } from '../../../model/inpatient.model';
import { InpatientService } from '../../../service/inpatient.service';

@Component({
  selector: 'app-inpatient-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inpatient-registration.component.html',
  styleUrl: './inpatient-registration.component.css'
})
export class InpatientRegistrationComponent implements OnInit{

   id:number;
    name:string;
    phoneNumber:number;
    gender:string;
    age:number;
    bloodgroup:string;
    address:string;
    user:User;

    patient: Inpatient=new Inpatient();

    constructor(private patientservice:InpatientService){

    }
  ngOnInit(): void {
    this.patientservice.personalinfo$.subscribe(patient=>{
      this.name = patient.name;
    this.phoneNumber = patient.phoneNumber;
    this.gender = patient.gender;
    this.age = patient.age;
    this.bloodgroup = patient.bloodgroup;
    this.address = patient.address;
    this.user = patient.user;
  
     })
  }

  onChange(){
    //this.patientService.setPersonalInfo(this.name,this.email,this.contact);
    //this.patientservice.setInpatient(this.patient)
 
      // Create a new instance of Inpatient with updated values
      const updatedPatient = new Inpatient();
      updatedPatient.name = this.name;
      updatedPatient.phoneNumber = this.phoneNumber;
      updatedPatient.gender = this.gender;
      updatedPatient.age = this.age;
      updatedPatient.bloodgroup = this.bloodgroup;
      updatedPatient.address = this.address;
      updatedPatient.user = this.user;
    
      // Update the BehaviorSubject with the new Inpatient instance
      this.patientservice.setInpatient(updatedPatient);
  }
    
  

}
