import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { LoginComponent } from '../../auth/login/login.component';
import { Router } from '@angular/router';
import { OPDRegisterComponent } from '../opdregister/opdregister.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LoginComponent,OPDRegisterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
bookAppointment() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router){
    
  }
  OnLoginClick(){
    this.router.navigateByUrl('/login');
  }
  OnRegisterClick(){
    this.router.navigateByUrl('/opd/register');
  }
  OnSpecializationClick(){
    this.router.navigateByUrl('/display/specialization');
  }
}
