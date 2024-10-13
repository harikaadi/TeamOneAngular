import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTestResultInpatientComponent } from './upload-test-result-inpatient.component';

describe('UploadTestResultInpatientComponent', () => {
  let component: UploadTestResultInpatientComponent;
  let fixture: ComponentFixture<UploadTestResultInpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTestResultInpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTestResultInpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
