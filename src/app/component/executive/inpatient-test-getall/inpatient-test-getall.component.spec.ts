import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientTestGetallComponent } from './inpatient-test-getall.component';

describe('InpatientTestGetallComponent', () => {
  let component: InpatientTestGetallComponent;
  let fixture: ComponentFixture<InpatientTestGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpatientTestGetallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpatientTestGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
