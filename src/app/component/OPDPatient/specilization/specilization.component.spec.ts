import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecilizationComponent } from './specilization.component';

describe('SpecilizationComponent', () => {
  let component: SpecilizationComponent;
  let fixture: ComponentFixture<SpecilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecilizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
