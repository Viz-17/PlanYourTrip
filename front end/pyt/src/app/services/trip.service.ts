import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Trip } from '../trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseURL="http://localhost:8080/api/v1/packages/admin";
  

  constructor(private httpClient: HttpClient) { }

  getTripList(): Observable<Trip[]> {
    
    return this.httpClient.get<Trip[]>(`${this.baseURL}`);
  }
  createTrip(trip:Trip): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,trip);
  }
  getTripById(id: number): Observable<Trip>{
    return this.httpClient.get<Trip>(`${this.baseURL}/${id}`);
    
  }
  updateTrip(id:number, trip: Trip): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,trip);
  }
  deleteTrip(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
