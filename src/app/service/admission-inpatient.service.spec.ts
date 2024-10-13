import { TestBed } from '@angular/core/testing';

import { AdmissionInpatientService } from './admission-inpatient.service';

describe('AdmissionInpatientService', () => {
  let service: AdmissionInpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionInpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
