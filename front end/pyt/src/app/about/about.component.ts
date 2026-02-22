import { Component, OnInit } from '@angular/core';
import { LogindetailsService } from '../services/logindetails.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public authService: LogindetailsService) { }

  ngOnInit(): void {
  }

}
