import { Component, OnInit } from '@angular/core';
import { floorCapacityMap } from '../services/data';
import { IRegistration } from '../services/interface';
import { ParkingRegistrationService } from '../services/parking-registration/parking-registration.service';

@Component({
  selector: 'app-display-boards',
  templateUrl: './display-boards.component.html',
  styleUrls: ['./display-boards.component.scss'],
})
export class DisplayBoardsComponent implements OnInit {
  floors = floorCapacityMap;
  selectedFloor = '';
  displayFloors: any[] = [];
  totalRemainingSlots = 0;

  ngOnInit(): void {
    this.calculateRemainingParkingCapacity();
  }

  customerSelection: IRegistration[] = [];

  constructor(private parkingRegistrationService: ParkingRegistrationService) {
    this.customerSelection = this.parkingRegistrationService.getRegistrations();
  }

  onFloorSelect() {
    this.displayFloors = this.selectedFloor
      ? this.floors.filter((floor) => floor.id === this.selectedFloor)
      : this.floors;
  }

  calculateRemainingParkingCapacity() {
    this.floors.forEach((floor) => {
      const floorVehicles = this.customerSelection.filter(
        (node) => node.floor === floor.id
      );
      floor.parkingSlots.forEach((slot) => {
        const slotVehiclesCount = floorVehicles.filter(
          (node) => node.parkingSlotType === slot.slotId
        ).length;
        slot.used = slotVehiclesCount;
        slot.remaining = slot.count - slot.used;
        this.totalRemainingSlots += slot.remaining;
      });
    });
    this.onFloorSelect();
  }
}
