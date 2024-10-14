import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  private apiUrl = 'http://localhost:8082/doctor/all/specialization'; // Your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch specializations without token
  getSpecializations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

