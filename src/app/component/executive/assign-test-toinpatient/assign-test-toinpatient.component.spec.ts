import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTestToinpatientComponent } from './assign-test-toinpatient.component';

describe('AssignTestToinpatientComponent', () => {
  let component: AssignTestToinpatientComponent;
  let fixture: ComponentFixture<AssignTestToinpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignTestToinpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTestToinpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
