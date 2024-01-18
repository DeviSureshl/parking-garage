import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingRegistrationComponent } from './parking-registration/parking-registration.component';
import { DisplayBoardsComponent } from './display-boards/display-boards.component';
import { ParkingCheckoutComponent } from './parking-checkout/parking-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EarningsComponent } from './earnings/earnings.component';

const routes: Routes = [
  {
    path: 'register',
    component: ParkingRegistrationComponent,
  },
  {
    path: 'display-boards',
    component: DisplayBoardsComponent,
  },
  {
    path: 'checkout',
    component: ParkingCheckoutComponent,
  },
  {
    path: 'earnings',
    component: EarningsComponent,
  },
  {
    path: '**',
    redirectTo: 'register',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [RouterModule],
  declarations: [
    ParkingRegistrationComponent,
    DisplayBoardsComponent,
    ParkingCheckoutComponent,
    EarningsComponent,
  ],
})
export class AppRoutingModule {}
