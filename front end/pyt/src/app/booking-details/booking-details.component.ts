import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookingService } from '../services/book.service';
import { TripService } from '../services/trip.service';
import { LogindetailsService } from '../services/logindetails.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  book: Book = new Book();
  trips: Trip[] = [];

  constructor(
    private bookservice: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private tripService: TripService,
    public authService: LogindetailsService
  ) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) {
      this.book.yourname = username;
    }

    this.route.queryParams.subscribe(params => {
      if (params['package']) {
        this.book.place = params['package'];
      }
    });

    this.tripService.getTripList().subscribe(data => {
      this.trips = data;
    });
  }

  onSubmit() {
    this.bookservice.booked(this.book).subscribe(
      data => {
        console.log(data);
        alert("Successfully Booked !!!");
        this.router.navigate(['/home']);
      },
      error => console.log("exception occured")
    );
  }

}
