import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../service/test.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';

@Component({
  selector: 'app-inpatient-test-getall',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,ExecutiveNavbarComponent],
  templateUrl: './inpatient-test-getall.component.html',
  styleUrl: './inpatient-test-getall.component.css'
})
export class InpatientTestGetallComponent implements OnInit {
  
  inpatienttests:any[];
  totalPages:number;
  numArray:number[]=[];
  counter:number=0;
  page:number=0;
  size:number=5;
  last:boolean=false;
  first:boolean=true;

  constructor(private testservice:TestService,private router:Router){
     this.fetchInpatientTestsAll();
  }
  ngOnInit(): void {
    
  }
  onUploadTestResult(ptid:any){
     this.router.navigateByUrl('/inpatient/test/resultuoload/'+ptid)

  }
  fetchInpatientTestsAll(){
    this.testservice.inpatientTestGetAll(this.page,this.size).subscribe({
      next:(data)=>{
        console.log("inside all inpatient test ");
        this.inpatienttests=data.content;
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


        console.log(this.totalPages);
        console.log(this.inpatienttests);
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }
  onPageNumberClick(n:number){
    this.page=n;
    this.fetchInpatientTestsAll();
  }

  onNext(){
    this.page=this.page+1;
    this.fetchInpatientTestsAll();
  }
  onPrev(){
    this.page=this.page-1;
    this.fetchInpatientTestsAll();
  }

}
