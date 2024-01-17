import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { floorCapacityMap, parkingSlotType } from '../services/data';

@Component({
  selector: 'app-parking-registration',
  templateUrl: './parking-registration.component.html',
  styleUrls: ['./parking-registration.component.scss'],
})
export class ParkingRegistrationComponent implements OnInit {
  parkingDetails:any[] = [];
  registrationForm: FormGroup;
  ngOnInit(): void {
    
  }
  parkingSlotTypes = parkingSlotType;
  floors = floorCapacityMap;
  
  constructor(private FormBuilder: FormBuilder) {
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
      this.registrationForm.reset();
    }
  }
}
