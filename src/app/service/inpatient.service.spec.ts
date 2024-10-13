import { TestBed } from '@angular/core/testing';

import { InpatientService } from './inpatient.service';

describe('InpatientService', () => {
  let service: InpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
