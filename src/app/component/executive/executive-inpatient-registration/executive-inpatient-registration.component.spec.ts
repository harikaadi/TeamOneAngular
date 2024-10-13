import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInpatientRegistrationComponent } from './executive-inpatient-registration.component';

describe('ExecutiveInpatientRegistrationComponent', () => {
  let component: ExecutiveInpatientRegistrationComponent;
  let fixture: ComponentFixture<ExecutiveInpatientRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInpatientRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInpatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
