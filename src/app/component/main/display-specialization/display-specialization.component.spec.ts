import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySpecializationComponent } from './display-specialization.component';

describe('DisplaySpecializationComponent', () => {
  let component: DisplaySpecializationComponent;
  let fixture: ComponentFixture<DisplaySpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySpecializationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
