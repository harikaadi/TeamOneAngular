import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpecilizationComponent } from '../specilization/specilization.component';

@Component({
  selector: 'app-opd-navbar',
  standalone: true,
  imports: [SpecilizationComponent],
  templateUrl: './opd-navbar.component.html',
  styleUrl: './opd-navbar.component.css'
})
export class OpdNavbarComponent {
  username: any;
  constructor(private router: Router){//injecting router service
    this.username= localStorage?.getItem('username'); 
   }
   onLogout(){
    console.log("in logout'");
    this.router.navigateByUrl('logout/l'); 
  }

  onSpecilization(){
    console.log("in specilization");
    this.router.navigateByUrl('specilization/list')
  }

}
