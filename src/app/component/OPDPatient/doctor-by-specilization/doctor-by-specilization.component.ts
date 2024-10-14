import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../service/doctor.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-doctor-by-specilization',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './doctor-by-specilization.component.html',
  styleUrl: './doctor-by-specilization.component.css'
})
export class DoctorBySpecilizationComponent implements OnInit{
  doctors: any[] = [];
  specialization: any;
  errorMessage: string = '';

  constructor(
    private actroute: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) { 
    this.specialization=actroute.snapshot.paramMap.get('specialization');
    console.log(this.specialization);
  }

  ngOnInit() {
    console.log(this.actroute.snapshot.paramMap.get('specialization'));
    //this.specialization = route.snapshot.paramMap.get('specialization');
    if (this.specialization) {
      this.fetchDoctors(this.specialization);
    }
  }

  fetchDoctors(specialization: string) {
    this.doctorService.getDoctorsBySpecialization(specialization).subscribe({
      next: (data) => {
        this.doctors = data;
      },
      error: (error) => {
        console.error('Error fetching doctors', error);
        this.errorMessage = 'Unable to fetch doctors. Please try again later.';
      }
    });
  }

  onDoctorSelect(doctorId: number) {
    //this.router.navigate(['/schedule', doctorId]); // Navigate to schedule view
    this.router.navigate(['/doctor-schedule', doctorId]);
  }
}
