import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { TestService } from '../../../service/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-test-result-inpatient',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,ExecutiveNavbarComponent],
  templateUrl: './upload-test-result-inpatient.component.html',
  styleUrl: './upload-test-result-inpatient.component.css'
})
export class UploadTestResultInpatientComponent implements OnInit{
  itestid:any;
  file: File = null; 
  imageMsg: string=''; 
  images: string[] = [];

  constructor(private testservice:TestService,private actRoute:ActivatedRoute){
    this.itestid=actRoute.snapshot.paramMap.get('ptid');
    console.log(this.itestid)
  }
  ngOnInit(): void {
   
  }
  onChange(event:any){
      console.log(event.target.files[0])
      this.file = event.target.files[0];
  }
  onUpload(){
   let formData = new FormData;
   formData.set('file',this.file)
   this.testservice.uploadTestResult(formData,this.itestid).subscribe({
     next:(data)=>{
      this.images.push(this.file.name)
      this.imageMsg = 'Test Result '+this.file.name+'is uploaded for patient-test-id'+this.itestid;

     },
     error:()=>{

     }
   });
   
  }


}
