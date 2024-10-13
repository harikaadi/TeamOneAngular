import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardInpatientComponent } from './onboard-inpatient.component';

describe('OnboardInpatientComponent', () => {
  let component: OnboardInpatientComponent;
  let fixture: ComponentFixture<OnboardInpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardInpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardInpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
