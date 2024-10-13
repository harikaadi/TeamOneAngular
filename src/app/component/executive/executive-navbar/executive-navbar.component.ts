import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executive-navbar',
  standalone: true,
  imports: [],
  templateUrl: './executive-navbar.component.html',
  styleUrl: './executive-navbar.component.css'
})
export class ExecutiveNavbarComponent {
  username: any;
  constructor(private router: Router){//injecting router service
    this.username= localStorage?.getItem('username'); 
   }
   onLogout(){
    console.log("in logout'");
    this.router.navigateByUrl('logout/l'); 
  }

}
