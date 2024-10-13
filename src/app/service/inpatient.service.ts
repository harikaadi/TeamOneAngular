import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inpatient } from '../model/inpatient.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admission } from '../model/admmision.model';

@Injectable({
  providedIn: 'root'
})
export class InpatientService implements OnInit{

  personalinfo$=new BehaviorSubject<Inpatient>(new Inpatient());
  // Method to update the Inpatient object
  setInpatient(inpatient: Inpatient): void {
    this.personalinfo$.next(inpatient);
  }
  /*{
    roomtype:'',
    commonhealthissue:'',
    admmisiontype:''
  }*/
  admissioninfo$=new BehaviorSubject<Admission>(new Admission());

  setAdmmision(admission:Admission):void{
   this.admissioninfo$.next(admission);
  }   
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  getRoomsAll():Observable<any>{
    return this.http.get('http://localhost:8082/room/avail');
  }
  getRooms():Observable<any>{
    return this.http.get('http://localhost:8082/rooms');
  }
  //get all healthissue api
  getAllCommonHealthIssuesApi: string = 'http://localhost:8082/healthissues';

  getAllCommonHealthIssues():Observable<any>{
    return this.http.get<any>(this.getAllCommonHealthIssuesApi)
  }

  /*postSchedule(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/doctor/schedule/add', obj, 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      }
    )
  }*/
  addinpatient(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/inpatient/add',obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }
   )
  }
  addmedicalhistory(pid:number,obj:any):Observable<any>{
    const url=`http://localhost:8082/patient/history/add/${pid}`;
    return this.http.post(url,obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }
  
  addAppointment(pid:number,healthIssue: string, roomType: string,obj:any):Observable<any>{
    console.log(healthIssue)
    console.log(roomType)
    const url = `http://localhost:8082/addadmission/${pid}/${healthIssue}/${roomType}`;
    //'http://localhost:8082/addadmission/${healthIssue}/${roomType}'
    return this.http.post(url,obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }
  )
  }
  


}
