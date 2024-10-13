import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientRegistrationComponent } from './inpatient-registration.component';

describe('InpatientRegistrationComponent', () => {
  let component: InpatientRegistrationComponent;
  let fixture: ComponentFixture<InpatientRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpatientRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
