import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../trip';
@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  id!: number;
  trip: Trip = new Trip();
  constructor(private tripService: TripService, 
    private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.tripService.getTripById(this.id).subscribe(data => {this.trip=data;}, error => console.log(error));
  }
  onSubmit(){
    this.tripService.updateTrip(this.id, this.trip).subscribe(data => {this.gotoTripList();}, error =>console.log(error));
  }

  gotoTripList(){
    this.router.navigate(['/admin']);
  }

}
