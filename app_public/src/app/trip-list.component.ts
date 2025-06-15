import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-list',
  templateUrl: './trip-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TripListComponent {
  trips = [
    {
      name: 'Bali Adventure',
      description: 'Experience the beauty and culture of Bali.',
      resort: 'Bali Resort & Spa',
      perPerson: 899.99
    },
    {
      name: 'Paris Getaway',
      description: 'Explore the romantic city of Paris.',
      resort: 'Champs Elysees Hotel',
      perPerson: 1099.99
    },
    {
      name: 'New York City Explorer',
      description: 'Discover the sights and sounds of NYC.',
      resort: 'Midtown Manhattan Inn',
      perPerson: 799.99
    }
  ];
}
