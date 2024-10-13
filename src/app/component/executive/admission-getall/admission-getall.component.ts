import { Component, OnInit } from '@angular/core';
import { AdmissionInpatientService } from '../../../service/admission-inpatient.service';
import { NgFor } from '@angular/common';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';
import { ExecutiveSidebarComponent } from '../executive-sidebar/executive-sidebar.component';
import { OnboardInpatientComponent } from '../onboard-inpatient/onboard-inpatient.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InpatientMedicalinfoComponent } from '../inpatient-medicalinfo/inpatient-medicalinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-getall',
  standalone: true,
  imports: [NgFor,ExecutiveNavbarComponent,ExecutiveSidebarComponent,OnboardInpatientComponent,StepperModule,ButtonModule,InpatientMedicalinfoComponent],
  templateUrl: './admission-getall.component.html',
  styleUrl: './admission-getall.component.css'
})
export class AdmissionGetallComponent implements OnInit {
  inpatientadmissions:any[];
  totalPages:number;
  numArray:number[]=[];
  counter:number=0;
  page:number=0;
  size:number=5;
  last:boolean=false;
  first:boolean=true;
//StepperModule ,ButtonModule,InpatientMedicalinfoComponent,InpatientRoominfoComponent,InpatientRegistrationComponent,SummaryComponent
  constructor(private admissioninpatientservice:AdmissionInpatientService,private router:Router){
    this.fetchAllAdmissions();
    
  }
  ngOnInit(): void {

  }
  onAssignTest(pid:any,did:any){
    this.router.navigateByUrl('/assigntest/inpatient/'+pid+'/'+did)

  }
  onAddPrescription(pid:any,did:any){
    this.router.navigateByUrl('/addprescription/inpatient/'+pid+'/'+did)
  }
  fetchAllAdmissions(){
    this.admissioninpatientservice.getAllAdmissions(this.page,this.size).subscribe({
      next:(data)=>{
          this.inpatientadmissions=data.content;
          this.totalPages=data.totalPages;
          this.last=data.last;
          this.first=data.first;
          if(this.counter===0){
            let i=0;
            while(i<this.totalPages){
                this.numArray.push(i);
                i++;
            }
          }
          this.counter=this.counter+1;
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  onPageNumberClick(n:number){
    this.page=n;
    this.fetchAllAdmissions();
  }

  onNext(){
    this.page=this.page+1;
    this.fetchAllAdmissions();
  }
  onPrev(){
    this.page=this.page-1;
    this.fetchAllAdmissions();
  }

}
