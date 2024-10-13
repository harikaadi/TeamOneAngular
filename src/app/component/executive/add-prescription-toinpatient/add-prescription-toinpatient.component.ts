import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../service/test.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExecutiveNavbarComponent } from "../executive-navbar/executive-navbar.component";

@Component({
  selector: 'app-add-prescription-toinpatient',
  standalone: true,
  imports: [FormsModule, ExecutiveNavbarComponent,NgIf],
  templateUrl: './add-prescription-toinpatient.component.html',
  styleUrl: './add-prescription-toinpatient.component.css'
})
export class AddPrescriptionToinpatientComponent implements OnInit{

  pid:any;
did:any;
successMsg: string='';
    errorMsg:string='';
    successMsgAssignTest: string='';
    selectedTestName:any;
    testId:number;
    medicineName:string;
    dosage:string;
    treatmentPlan:string;
    constructor(private testservice:TestService,private actRoute:ActivatedRoute){
      this.pid = actRoute.snapshot.paramMap.get('pid');
      this.did = actRoute.snapshot.paramMap.get('did');
    }

    
    ngOnInit(): void {
      
  
     }

     onAdd(){
      this.testservice.addPrescriptionToinpatient(this.pid,this.did,{
        "medicineName":this.medicineName,
        "dosage":this.dosage,
        "treatmentPlan":this.treatmentPlan
      }).subscribe({
        next:(data)=>{
          this.successMsg='Prescription Added!!!'
          this.errorMsg=undefined;
        },
        error:(err)=>{
           console.log(err)
        }
        
      })
     }

}
