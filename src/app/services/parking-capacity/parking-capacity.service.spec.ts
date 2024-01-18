import { TestBed } from '@angular/core/testing';

import { ParkingCapacityService } from './parking-capacity.service';

describe('ParkingCapacityService', () => {
  let service: ParkingCapacityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingCapacityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
