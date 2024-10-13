import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../service/test.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';

@Component({
  selector: 'app-assign-test-toinpatient',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,ExecutiveNavbarComponent],
  templateUrl: './assign-test-toinpatient.component.html',
  styleUrl: './assign-test-toinpatient.component.css'
})
export class AssignTestToinpatientComponent implements OnInit {
testnames:any[]=[];
pid:any;
did:any;
successMsg: string='';
    errorMsg:string='';
    successMsgAssignTest: string='';
    selectedTestName:any;
    testId:number;
  constructor(private testservice:TestService,private actRoute:ActivatedRoute){
    this.pid = actRoute.snapshot.paramMap.get('pid');
    this.did = actRoute.snapshot.paramMap.get('did');

    this.testservice.getAllTestNames().subscribe({
        next:(data)=>{
          this.testnames=data;
        },
        error:(err)=>{
          console.log(err);
        }
    })

  }
  ngOnInit(): void {
   
  }
  onAssignTest(selectedTestName:string){
    console.log('inside assigntest');
    this.testservice.getTestByTestName(selectedTestName).subscribe({
        next:(data)=>{
          console.log('inside assign test');
          console.log(data.id);
          this.testId=data.id;
          console.log(this.testId);
          console.log(data.id,data.testName,data.description,data.price);
          this.successMsg='test id exists for selected testname';
          this.testservice.assigntest(this.pid,this.did,this.testId).subscribe({
            next:(data)=>{
             this.successMsgAssignTest='Test Assigned successfully!!!';
            },
            error:(err)=>{
             console.log(err);
            }
         })
     
        },
        error:(err)=>{
          console.log(err);
        }
    })
    

  }
  onChange(){

  }



}
