import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrescriptionToinpatientComponent } from './add-prescription-toinpatient.component';

describe('AddPrescriptionToinpatientComponent', () => {
  let component: AddPrescriptionToinpatientComponent;
  let fixture: ComponentFixture<AddPrescriptionToinpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrescriptionToinpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrescriptionToinpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
