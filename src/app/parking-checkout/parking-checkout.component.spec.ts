import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingCheckoutComponent } from './parking-checkout.component';

describe('ParkingCheckoutComponent', () => {
  let component: ParkingCheckoutComponent;
  let fixture: ComponentFixture<ParkingCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingCheckoutComponent]
    });
    fixture = TestBed.createComponent(ParkingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
