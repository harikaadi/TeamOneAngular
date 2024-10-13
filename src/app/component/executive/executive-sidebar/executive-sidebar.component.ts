import { Component } from '@angular/core';
import { OnboardInpatientComponent } from '../onboard-inpatient/onboard-inpatient.component';
import { AdmissionGetallComponent } from '../admission-getall/admission-getall.component';

@Component({
  selector: 'app-executive-sidebar',
  standalone: true,
  imports: [OnboardInpatientComponent,AdmissionGetallComponent],
  templateUrl: './executive-sidebar.component.html',
  styleUrl: './executive-sidebar.component.css'
})
export class ExecutiveSidebarComponent {

}
