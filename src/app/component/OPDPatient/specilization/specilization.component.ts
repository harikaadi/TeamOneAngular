import { Component, OnInit } from '@angular/core';
import { SpecializationService } from '../../../service/specialization.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { OpdNavbarComponent } from "../opd-navbar/opd-navbar.component";

@Component({
  selector: 'app-specilization',
  standalone: true,
  imports: [NgFor, OpdNavbarComponent,RouterModule],
  templateUrl: './specilization.component.html',
  styleUrl: './specilization.component.css'
})
export class SpecilizationComponent implements OnInit {
  specializations: any[] = [];
  errorMessage: string = '';

  constructor(private specializationService: SpecializationService, private router: Router) {}

  ngOnInit() {
    this.fetchSpecializations();
  }

  fetchSpecializations() {
    this.specializationService.getSpecializations().subscribe({
      next: (data) => {
        this.specializations = data;
      },
      error: (error) => {
        console.error('Error fetching specializations', error);
        this.errorMessage = 'Error fetching specializations, please try again later.';
      }
    });
  }

  onSpecializationClick(specialization: string) {
    console.log(`${specialization} card clicked!`);
    localStorage.setItem('selectedSpecialist', specialization);
    this.router.navigate(['/doctor',specialization]);
  }
}
