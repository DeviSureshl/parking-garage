import { Injectable } from '@angular/core';
import { IRegistration } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ParkingRegistrationService {
  registrations: IRegistration[] = [];

  constructor() {
    const registrationsFromMemory =
      localStorage.getItem('dnb-registrations') || '[]';
    this.registrations = JSON.parse(registrationsFromMemory);
  }

  setRegistrations(userRegistrations: IRegistration[]) {
    this.registrations = userRegistrations;
    localStorage.setItem(
      'dnb-registrations',
      JSON.stringify(this.registrations)
    );
  }

  getRegistrations() {
    return this.registrations;
  }
}
