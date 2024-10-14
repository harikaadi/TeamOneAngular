import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDRegisterComponent } from './opdregister.component';

describe('OPDRegisterComponent', () => {
  let component: OPDRegisterComponent;
  let fixture: ComponentFixture<OPDRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OPDRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
