import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { OpdService } from '../../../service/opd.service';


@Component({
  selector: 'app-opdregister',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './opdregister.component.html',
  styleUrl: './opdregister.component.css'
})
export class OPDRegisterComponent implements OnInit {
  patientId:number;
  name: string;
  gender: string;
  age: number;
  contactNumber: string;
  address: string;
  bloodGroup: string;
  reasonForVisit: string;
  //user: User;
  username:string;
  password:string;
  errorMsg:string=undefined;
  successMsg:string=undefined;
 constructor(private opdService:OpdService){
   
 }
  ngOnInit(): void {
    
  }


  onRegister(){
    this.opdService.addopdpatient({

      "name":this.name,
      "gender":this.gender,
      "age":this.age,
      "contactNumber":this.contactNumber,
      "address":this.address,
      "bloodGroup":this.bloodGroup,
      "reasonForVisit":this.reasonForVisit,
      "user":{
          "username":this.username,
          "password":this.password
      }
     }).subscribe({
      next:(data)=>{
        this.patientId=data.id;
        this.successMsg=`opdPatient added successfully${this.patientId}`;
      },
      error:(err)=>{
        console.log(err)
      }
  
     })
  }
  onChange(){

  }
    }

