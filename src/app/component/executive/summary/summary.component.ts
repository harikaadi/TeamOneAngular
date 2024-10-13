import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { FormsModule } from '@angular/forms';
import { InpatientService } from '../../../service/inpatient.service';
import { Inpatient } from '../../../model/inpatient.model';
import { MedicalhistoryService } from '../../../service/medicalhistory.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{
  //personal info
  id:number;
    name:string;
    phoneNumber:number;
    gender:string;
    age:number;
    bloodgroup:string;
    address:string;
    user:User;
    //medical info
   // id:number;
    medicalCondition:string;
    sinceWhen:string;
    inpatient:Inpatient;
    //admission
    roomtypeSummary:string;
    commonhealthissueSummary:string;
    admissiontypeSummary:string;
    //for dropdowns
    room:any;
  roomsavaliable:any[] = [];
  rate:number ;
  r:any;

  roomtype:string[] =[];
  healthissues:string[]=[];

  patientid:number;
  successMsg:string=undefined
  successMsg2:string=undefined
  successMsg3:string=undefined
  errorMsg:string=undefined

  doctorName:string;
  roomId:number;

  constructor(private patientservice:InpatientService,private medicalhistoryservice:MedicalhistoryService){
     //geting all rooms types
    this.patientservice.getRooms().subscribe({
      next : (data)=>{
        this.roomtype = data;
      }
    })
    //geting all common healthissue
    this.patientservice.getAllCommonHealthIssues().subscribe({
      next:(data)=>{
        this.healthissues = data;
      }
    })
  }

  ngOnInit(): void {
    //personal info
   this.patientservice.personalinfo$.subscribe(Inpatient=>{
    this.name = Inpatient.name;
    this.phoneNumber=Inpatient.phoneNumber;
    this.gender=Inpatient.gender;
    this.age=Inpatient.age;
    this.bloodgroup=Inpatient.bloodgroup;
    this.address=Inpatient.address;
    this.user=Inpatient.user;
    console.log(Inpatient)
   })
   //medical info
   this.medicalhistoryservice.medicalinfo$.subscribe(MedicalHistory=>{
    this.medicalCondition = MedicalHistory.medicalCondition;
    this.sinceWhen = MedicalHistory.sinceWhen;
    //this.inpatient.id=MedicalHistory.inpatient.id;
    console.log(MedicalHistory)
  })
  this.patientservice.admissioninfo$.subscribe(Admission=>{
    this.roomtypeSummary=Admission.roomtype;
    this.commonhealthissueSummary=Admission.commonhealthissue;
    this.admissiontypeSummary=Admission.admmisiontype;
  })
   
  }
  onChange(){
    //this.patientservice.setInpatient()
  }
  onSubmit(){
    this.patientservice.addinpatient({
      "name":this.name,
      "phonenumber":this.phoneNumber,
      "gender":this.gender,
      "age":this.age,
      "bloodGroup":this.bloodgroup,
      "address":this.address,
      "user":{
          "username":this.user.username,
          "password":this.user.password
      }
    }).subscribe({
      next:(data)=>{
        this.patientid=data.id;
        console.log('patiendid :')
        console.log(this.patientid)
        this.successMsg = `Inpatient Added added with inpatientid:${this.patientid}`;
        this.errorMsg = undefined
        //adding medical history
            this.patientservice.addmedicalhistory(this.patientid,{
            "medicalCondition":this.medicalCondition,
            "sinceWhen":this.sinceWhen
            }).subscribe({
              next:(data)=>{
                this.successMsg2 = 'Medical History added Succesfully'
              },
              error:(err)=>{
                this.successMsg2= undefined;
                 console.log(err)
                 this.errorMsg = err.message
              }
            })
        //admission api
        this.patientservice.addAppointment(this.patientid,this.commonhealthissueSummary,this.roomtypeSummary,{ "admissionType":this.admissiontypeSummary}
        ).subscribe({
          next :(data)=>{
            console.log("inside admission")
            this.doctorName = data.doctor.name;
            //this.doctorSpecialization=data.doctor.specialization;
            this.roomId = data.room.id;
            //this.roomRate=data.room.rate;
            //this.admissionStatus=data.admissionStatus
       
            this.successMsg3 = `Admission added and the Doctor Id:${this.doctorName} and the Room Id:${this.roomId}`;
            this.errorMsg = undefined
          },
          error :(err)=>{
            this.successMsg = undefined;
            console.log(err)
            this.errorMsg = err.message
          }
        })
            
      },
      error:(err)=>{
        this.successMsg = undefined;
        console.log(err)
        this.errorMsg = err.message
      }
    })
  }

}
