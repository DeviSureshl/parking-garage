import { Component, OnInit } from '@angular/core';
import { floorCapacityMap } from '../services/data';

@Component({
  selector: 'app-display-boards',
  templateUrl: './display-boards.component.html',
  styleUrls: ['./display-boards.component.scss'],
})
export class DisplayBoardsComponent implements OnInit {
  floors = floorCapacityMap;
  selectedFloor = '';
  displayFloors: any[] = [];

  ngOnInit(): void {
    this.calculateRemainingParkingCapacity();
  }

  customerSelection = [
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-001',
      vehicleNumber: 'abc123',
      floor: 'FLR-001',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-001',
      vehicleNumber: 'abc123',
      floor: 'FLR-001',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-002',
      vehicleNumber: 'abc123',
      floor: 'FLR-001',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-003',
      vehicleNumber: 'abc123',
      floor: 'FLR-001',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-002',
      vehicleNumber: 'def12234',
      floor: 'FLR-002',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-002',
      vehicleNumber: 'mnnjj233',
      floor: 'FLR-002',
    },
    {
      checkInDate: '2024-01-16T12:58',
      parkingSlotType: 'PST-003',
      vehicleNumber: 'ahdjj123',
      floor: 'FLR-004',
    },
    {
      checkInDate: '2024-01-24T12:58',
      parkingSlotType: 'PST-004',
      vehicleNumber: 'kwjnsn233',
      floor: 'FLR-003',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-001',
      vehicleNumber: 'kwjnsn233bhguij',
      floor: 'FLR-004',
    },
    {
      checkInDate: '2024-01-17T12:58',
      parkingSlotType: 'PST-002',
      vehicleNumber: 'hjhkjq234',
      floor: 'FLR-003',
    },
  ];

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
      });
    });
    this.onFloorSelect();
  }
}
