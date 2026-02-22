import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { TripService } from '../services/trip.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {


  trips!: Trip[];

  constructor(private tripservice: TripService, private router:Router) { }

  ngOnInit(): void {
    this.getTrips();
    }

  private getTrips(){
    this.tripservice.getTripList().subscribe(data => { this.trips=data;})
  }

  updateTrip(id: number){
    this.router.navigate(['update-trip',id])
  }
  deleteTrip(id: number){
    this.tripservice.deleteTrip(id).subscribe( data =>{console.log(data); this.getTrips();})
  }

}
