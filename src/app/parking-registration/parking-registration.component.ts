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
    private FormBuilder: FormBuilder,
    private parkingRegistrationService: ParkingRegistrationService
  ) {
    this.parkingDetails = this.parkingRegistrationService.getRegistrations();
    this.registrationForm = this.FormBuilder.group({
      checkInDate: ['', Validators.required],
      parkingSlotType: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      floor: ['', Validators.required],
    });
  }

  OnSubmit() {
    if (this.registrationForm.valid) {
      this.parkingDetails.push(this.registrationForm.value);
      console.log(JSON.stringify(this.parkingDetails));
      this.parkingRegistrationService.setRegistrations(this.parkingDetails);
      this.registrationForm.reset();
      alert('New parking has been created');
    }
  }

  onParkingSlotSelected() {
    this.availableFloors = this.floors.filter(
      (floor) =>
        floor.parkingSlots.filter(
          (slot) => slot.slotId === this.registrationForm.value.parkingSlotType
        ).length > 0
    );
  }
}
