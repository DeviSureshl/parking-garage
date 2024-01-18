import { Injectable } from '@angular/core';
import { IFloorCapacity, IRegistration } from '../interface';
import { ParkingRegistrationService } from '../parking-registration/parking-registration.service';
import { floorCapacityMap } from '../data';

@Injectable({
  providedIn: 'root',
})
export class ParkingCapacityService {
  floorParkingCapacity: IFloorCapacity[] = [];
  customerParkingDetails: IRegistration[] = [];

  constructor(private parkingRegistrationService: ParkingRegistrationService) {
    this.floorParkingCapacity = floorCapacityMap;
    this.customerParkingDetails =
      this.parkingRegistrationService.getRegistrations();
    this.updateRemainingParkingCapacity();
  }

  getFloorParkingCapacity() {
    return this.floorParkingCapacity;
  }

  updateRemainingParkingCapacity() {
    this.customerParkingDetails =
      this.parkingRegistrationService.getRegistrations();
    this.floorParkingCapacity.forEach((floor) => {
      const floorVehicles = this.customerParkingDetails.filter(
        (node) => node.floor === floor.id
      );
      floor.parkingSlots.forEach((slot) => {
        const slotVehiclesCount = floorVehicles.filter(
          (node) => node.parkingSlotType === slot.slotId
        ).length;
        slot.used = slotVehiclesCount;
        slot.remaining = slot.count - slot.used;
      });
    });
  }

  getRemainingParkingSlotsAvailable() {
    let remainingCount = 0;
    this.floorParkingCapacity.forEach((floor) => {
      floor.parkingSlots.forEach((slot) => {
        remainingCount += slot.remaining;
      });
    });
    return remainingCount;
  }
}
