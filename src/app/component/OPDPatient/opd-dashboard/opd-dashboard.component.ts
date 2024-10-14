import { Component } from '@angular/core';
import { OpdNavbarComponent } from '../opd-navbar/opd-navbar.component';

@Component({
  selector: 'app-opd-dashboard',
  standalone: true,
  imports: [OpdNavbarComponent],
  templateUrl: './opd-dashboard.component.html',
  styleUrl: './opd-dashboard.component.css'
})
export class OpdDashboardComponent {

}
