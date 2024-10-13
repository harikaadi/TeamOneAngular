import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientRoominfoComponent } from './inpatient-roominfo.component';

describe('InpatientRoominfoComponent', () => {
  let component: InpatientRoominfoComponent;
  let fixture: ComponentFixture<InpatientRoominfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpatientRoominfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpatientRoominfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
