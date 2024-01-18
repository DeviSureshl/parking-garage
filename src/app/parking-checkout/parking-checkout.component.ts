import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingRegistrationService } from '../services/parking-registration/parking-registration.service';
import { IRegistration } from '../services/interface';
import { TransactionsService } from '../services/transactions/transactions.service';
import { ParkingCapacityService } from '../services/parking-capacity/parking-capacity.service';

@Component({
  selector: 'app-parking-checkout',
  templateUrl: './parking-checkout.component.html',
  styleUrls: ['./parking-checkout.component.scss'],
})
export class ParkingCheckoutComponent {
  registrationNumberForm: FormGroup;

  checkoutDateForm: FormGroup;

  regisrationDate = new Date().toISOString().substring(0, 16);

  userVehicleDetails: IRegistration | undefined;

  userBillAmount = 0;
  userParkingHours = 0;

  constructor(
    private formBuilder: FormBuilder,
    private parkingRegistrationService: ParkingRegistrationService,
    private transactionsService: TransactionsService,
    private parkingCapacityService: ParkingCapacityService,
  ) {
    this.registrationNumberForm = this.formBuilder.group({
      vehicleNumber: ['', Validators.required],
    });
    this.checkoutDateForm = this.formBuilder.group({
      checkoutDate: ['', Validators.required],
    });
  }

  findVehicle() {
    const searchRegistrationNumber =
      this.registrationNumberForm.value.vehicleNumber;
    const vehicleDetails = this.parkingRegistrationService
      .getRegistrations()
      .find(
        (registration) =>
          registration.vehicleNumber === searchRegistrationNumber
      );
    if (vehicleDetails) {
      this.userVehicleDetails = vehicleDetails;
      this.regisrationDate = vehicleDetails.checkInDate;
    } else {
      alert("Cannot find a vehicle with this registration number")
    }
  }

  calculatePrice() {
    const checkoutDate = new Date(this.checkoutDateForm.value.checkoutDate);
    const checkInDate = this.userVehicleDetails
      ? new Date(this.userVehicleDetails.checkInDate)
      : new Date();
    console.log(checkInDate);
    console.log(checkoutDate);

    const differenceInSeconds =
      (checkoutDate.getTime() - checkInDate.getTime()) / 1000;
    this.userParkingHours = Math.ceil(differenceInSeconds / 3600);
    console.log(this.userParkingHours);

    this.userBillAmount = this.calculateBill(this.userParkingHours);
    console.log(this.userBillAmount);
  }

  calculateBill(hours: number) {
    // hour 1 - 50
    // hour 2 and 3 - 30
    // remaining - 10
    let total = 0;
    if (hours >= 1) {
      total += 50;
    }
    if (hours >= 2) {
      total += 30;
    }
    if (hours >= 3) {
      total += 30;
      total += (hours - 3) * 10;
    }
    return total;
  }

  checkoutUser() {
    if (window.confirm('Confirm to checkout?')) {
      const vehicleDetails = this.parkingRegistrationService.getRegistrations();
      this.parkingRegistrationService.setRegistrations(
        vehicleDetails.filter(
          (node) => node.vehicleNumber != this.userVehicleDetails?.vehicleNumber
        )
      );
      if (this.userVehicleDetails) {
      this.transactionsService.addTransaction({
        registration: this.userVehicleDetails,
        paymentDate: this.checkoutDateForm.value.checkoutDate,
        amount: this.userBillAmount,
      })
    }
      alert('You have successfully checked out');
      this.registrationNumberForm.reset();
      this.checkoutDateForm.reset();
      this.parkingCapacityService.updateRemainingParkingCapacity();
      this.userVehicleDetails = undefined;
      this.userBillAmount = 0;
      this.userParkingHours = 0;
    }
  }
}
