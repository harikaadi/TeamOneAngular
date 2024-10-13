import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientMedicalinfoComponent } from './inpatient-medicalinfo.component';

describe('InpatientMedicalinfoComponent', () => {
  let component: InpatientMedicalinfoComponent;
  let fixture: ComponentFixture<InpatientMedicalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpatientMedicalinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpatientMedicalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
