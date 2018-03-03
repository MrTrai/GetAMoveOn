import { TestBed, inject } from '@angular/core/testing';

import { DoctorServiceService } from './doctor-service.service';

describe('DoctorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorServiceService]
    });
  });

  it('should be created', inject([DoctorServiceService], (service: DoctorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
