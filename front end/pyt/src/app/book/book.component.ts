import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';
import { LogindetailsService } from '../services/logindetails.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  trips!: Trip[];

  constructor(private tripservice: TripService, private router: Router, public authService: LogindetailsService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips() {
    this.tripservice.getTripList().subscribe(data => { this.trips = data; })
  }

  bookTrip(packageName: string) {
    this.router.navigate(['/home/bookdetails'], { queryParams: { package: packageName } });
  }

}
