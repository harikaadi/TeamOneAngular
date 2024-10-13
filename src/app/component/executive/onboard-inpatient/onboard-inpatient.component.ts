import { Component } from '@angular/core';
import { InpatientRegistrationComponent } from '../inpatient-registration/inpatient-registration.component';
import { InpatientMedicalinfoComponent } from '../inpatient-medicalinfo/inpatient-medicalinfo.component';
import { InpatientRoominfoComponent } from '../inpatient-roominfo/inpatient-roominfo.component';
import { SummaryComponent } from '../summary/summary.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ExecutiveNavbarComponent } from '../executive-navbar/executive-navbar.component';
@Component({
  selector: 'app-onboard-inpatient',
  standalone: true,
  imports: [StepperModule,ButtonModule,InpatientMedicalinfoComponent,InpatientRoominfoComponent,InpatientRegistrationComponent,SummaryComponent,ExecutiveNavbarComponent],
  templateUrl: './onboard-inpatient.component.html',
  styleUrl: './onboard-inpatient.component.css'
})
export class OnboardInpatientComponent {

}
