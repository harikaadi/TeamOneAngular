
import { Component, OnInit } from '@angular/core';
import { InpatientService } from '../../../service/inpatient.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Admission } from '../../../model/admmision.model';

@Component({
  selector: 'app-inpatient-roominfo',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './inpatient-roominfo.component.html',
  styleUrl: './inpatient-roominfo.component.css'
})
export class InpatientRoominfoComponent implements OnInit{

  room:any;
  roomsavaliable:any[] = [];
  rate:number ;
  r:any;

  roomtype:string[] =[];
  healthissues:string[]=[];

  roomtypeSelected:string;
  commonHealthIsuueSelected:string;
  admissionType:string;

  admission:Admission = new Admission();
 
  constructor(private inpatientservice :InpatientService){
    //displaying avalible rooms
    this.inpatientservice.getRoomsAll().subscribe({
      next : (data)=>{
        this.roomsavaliable = data
        console.log()
      }
    })
    //geting all rooms types
    this.inpatientservice.getRooms().subscribe({
      next : (data)=>{
        this.roomtype = data;
      }
    })
    //geting all common healthissue
    this.inpatientservice.getAllCommonHealthIssues().subscribe({
      next:(data)=>{
        this.healthissues = data;
      }
    })

  }
  getRoomImage(roomtype: string): string {
    switch (roomtype) {
        case 'GENERAL_WARD_ROOM':
            return 'generalward.jpeg';//generalward
        case 'PRIVATE_ROOM':
            return 'privateroom.jpg';
        // Add cases for other room types with their respective image paths
        case 'SEMI_PRIVATE_ROOM':
          return 'semiprivateroom.jpg';
        default:
            return 'assets/images/defaultroom.jpg'; // Fallback image
    }
  }
  ngOnInit(): void {
    this.inpatientservice.admissioninfo$.subscribe(admission=>{
      this.roomtypeSelected = admission.roomtype;
      this.commonHealthIsuueSelected = admission.commonhealthissue;
      this.admissionType = admission.admmisiontype;
    })
    console.log(this.commonHealthIsuueSelected,this.roomtypeSelected)
  }
  onChange(){

    const updatedadmission = new Admission();
    updatedadmission.roomtype = this.roomtypeSelected;
    updatedadmission.commonhealthissue = this.commonHealthIsuueSelected;
    updatedadmission.admmisiontype = this.admissionType;

    this.inpatientservice.setAdmmision(updatedadmission);
  }

}
