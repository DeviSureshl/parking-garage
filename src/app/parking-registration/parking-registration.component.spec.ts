import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingRegistrationComponent } from './parking-registration.component';

describe('ParkingRegistrationComponent', () => {
  let component: ParkingRegistrationComponent;
  let fixture: ComponentFixture<ParkingRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingRegistrationComponent]
    });
    fixture = TestBed.createComponent(ParkingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
