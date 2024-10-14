import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8082/doctor/specialization';  // Base URL for specialization
  
  constructor(private http: HttpClient) {}

  /**
   * Get doctors by specialization
   * @param specialization
   */
  getDoctorsBySpecialization(specialization: string): Observable<any[]> {
    const url = `${this.apiUrl}/${specialization}`;
    return this.http.get<any[]>(url);
  }

 
getDoctorSchedules(doctorId: number): Observable<any[]> {
  const url = `http://localhost:8082/doctor/${doctorId}/schedules`; 
  return this.http.get<any[]>(url);
}

getDoctorSchedulesSlots(doctorId: number,doctorSlot:string): Observable<any[]> {
  const url = `http://localhost:8082/doctor/${doctorId}/schedules/${doctorSlot}`; 
  return this.http.get<any[]>(url);
}
 
bookAppointment(doctorId: number,obj:any):Observable<any>
{
  const url = `http://localhost:8082/book-appointment/${doctorId}`;
  return this.http.post(url,obj,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  });
}
}
