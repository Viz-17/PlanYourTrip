import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  trip: Trip = new Trip();
  constructor(private tripService: TripService, private router:Router) { }

  ngOnInit(): void {
  }
  saveTrip(){
    this.tripService.createTrip(this.trip).subscribe(data => {console.log(data);}, error =>console.log(error));
    this.gotoTripList();
  }

  gotoTripList(){
    this.router.navigate(['/admin']);

  }
  onSubmit(){
    console.log(this.trip);
    this.saveTrip();
  }

}
