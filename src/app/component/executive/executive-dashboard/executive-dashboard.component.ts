import { Component } from '@angular/core';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';
import { ExecutiveSidebarComponent } from '../executive-sidebar/executive-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { OnboardInpatientComponent } from '../onboard-inpatient/onboard-inpatient.component';

@Component({
  selector: 'app-executive-dashboard',
  standalone: true,
  imports: [RouterOutlet,ExecutiveNavbarComponent,ExecutiveSidebarComponent,OnboardInpatientComponent],
  templateUrl: './executive-dashboard.component.html',
  styleUrl: './executive-dashboard.component.css'
})
export class ExecutiveDashboardComponent {

}
