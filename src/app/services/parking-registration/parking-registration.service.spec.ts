import { TestBed } from '@angular/core/testing';

import { ParkingRegistrationService } from './parking-registration.service';

describe('ParkingRegistrationService', () => {
  let service: ParkingRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
