import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { floorCapacityMap, parkingSlotType } from '../services/data';
import { ParkingRegistrationService } from '../services/parking-registration/parking-registration.service';
import { IFloorCapacity, IRegistration } from '../services/interface';

@Component({
  selector: 'app-parking-registration',
  templateUrl: './parking-registration.component.html',
  styleUrls: ['./parking-registration.component.scss'],
})
export class ParkingRegistrationComponent implements OnInit {
  parkingDetails: IRegistration[] = [];
  registrationForm: FormGroup;
  today = new Date().toISOString().substring(0, 16);

  ngOnInit(): void {}
  parkingSlotTypes = parkingSlotType;
  floors: IFloorCapacity[] = floorCapacityMap;
  availableFloors: IFloorCapacity[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private parkingRegistrationService: ParkingRegistrationService
  ) {
    this.parkingDetails = this.parkingRegistrationService.getRegistrations();
    this.calculateRemainingParkingCapacity();
    this.registrationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      parkingSlotType: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      floor: ['', Validators.required],
    });
  }

  OnSubmit() {
    if (this.registrationForm.valid) {
      const doesRegistrationNumberExists = this.parkingDetails.find(
        (node) =>
          node.vehicleNumber === this.registrationForm.value.vehicleNumber
      );
      if (!doesRegistrationNumberExists) {
        this.parkingDetails.push(this.registrationForm.value);
        console.log(JSON.stringify(this.parkingDetails));
        this.parkingRegistrationService.setRegistrations(this.parkingDetails);
        this.registrationForm.reset();
        this.calculateRemainingParkingCapacity();
        alert('New parking has been created');
      } else {
        alert(
          'Invalid registration number, the vehicle already has been registered'
        );
      }
    }
  }

  onParkingSlotSelected() {
    this.availableFloors = this.floors.filter((floor) => {
      const parkingSlotOnFloor = floor.parkingSlots.find(
        (slot) => slot.slotId === this.registrationForm.value.parkingSlotType
      );
      return parkingSlotOnFloor && parkingSlotOnFloor.remaining > 0;
    });
  }

  calculateRemainingParkingCapacity() {
    this.floors.forEach((floor) => {
      const floorVehicles = this.parkingDetails.filter(
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
}
