import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionGetallComponent } from './admission-getall.component';

describe('AdmissionGetallComponent', () => {
  let component: AdmissionGetallComponent;
  let fixture: ComponentFixture<AdmissionGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionGetallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
