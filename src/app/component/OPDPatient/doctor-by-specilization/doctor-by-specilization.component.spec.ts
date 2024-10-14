import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBySpecilizationComponent } from './doctor-by-specilization.component';

describe('DoctorBySpecilizationComponent', () => {
  let component: DoctorBySpecilizationComponent;
  let fixture: ComponentFixture<DoctorBySpecilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBySpecilizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBySpecilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
