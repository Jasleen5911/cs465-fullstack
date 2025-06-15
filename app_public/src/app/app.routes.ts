import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list.component';
import { TripDetailComponent } from './trip.detail.component';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'trip/:id', component: TripDetailComponent }
];
