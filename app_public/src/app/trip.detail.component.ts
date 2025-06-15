import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TripData, Trip } from './trip-data';

@Component({
  selector: 'trip-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Trip Detail</h2>
    <div *ngIf="trip; else loading">
      <p><strong>Name:</strong> {{ trip.name }}</p>
      <p><strong>Destination:</strong> {{ trip.destination }}</p>
      <p><strong>Price:</strong> $ {{ trip.price }}</p>
    </div>
    <ng-template #loading>
      <p>Loading trip details...</p>
    </ng-template>
  `
})
export class TripDetailComponent implements OnInit {
  trip?: Trip;

  constructor(private route: ActivatedRoute, private tripData: TripData) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tripData.getTrip(id).subscribe({
        next: (data: Trip) => this.trip = data,
        error: (err: any) => console.error('Error loading trip:', err)
      });
    }
  }
}


