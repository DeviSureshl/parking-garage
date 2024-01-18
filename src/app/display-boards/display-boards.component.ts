import { Component, OnInit } from '@angular/core';
import { IFloorCapacity } from '../services/interface';
import { ParkingCapacityService } from '../services/parking-capacity/parking-capacity.service';

@Component({
  selector: 'app-display-boards',
  templateUrl: './display-boards.component.html',
  styleUrls: ['./display-boards.component.scss'],
})
export class DisplayBoardsComponent implements OnInit {
  floors: IFloorCapacity[] = [];
  selectedFloor = '';
  displayFloors: any[] = [];
  totalRemainingSlots = 0;

  ngOnInit(): void {
    this.floors = this.parkingCapacityService.getFloorParkingCapacity();
    this.totalRemainingSlots =
      this.parkingCapacityService.getRemainingParkingSlotsAvailable();
    this.onFloorSelect();
  }

  constructor(private parkingCapacityService: ParkingCapacityService) {}

  onFloorSelect() {
    this.displayFloors = this.selectedFloor
      ? this.floors.filter((floor) => floor.id === this.selectedFloor)
      : this.floors;
  }
}
