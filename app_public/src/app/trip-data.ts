import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define Trip interface
export interface Trip {
  _id?: string;
  name: string;
  destination: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // Fetch all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  // Fetch one trip by id
  getTrip(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${id}`);
  }
}
