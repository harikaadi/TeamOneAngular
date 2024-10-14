import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdNavbarComponent } from './opd-navbar.component';

describe('OpdNavbarComponent', () => {
  let component: OpdNavbarComponent;
  let fixture: ComponentFixture<OpdNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpdNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
