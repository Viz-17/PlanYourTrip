import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../login-details';
import { LogindetailsService } from '../services/logindetails.service';
import { SignUpDetails } from '../sign-up-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userdetail: LogindetailsService, private router: Router) { }
  log: LoginDetails = new LoginDetails();
  us: SignUpDetails = new SignUpDetails();
  ngOnInit(): void {
  }

  onSubmit() {
    this.userdetail.loginUser(this.log).subscribe(data => {
      localStorage.setItem('isLoggedIn', 'true');
      if (this.log.name) {
        localStorage.setItem('username', this.log.name.toString());
      }
      this.router.navigate(['/home']);
    }, error => alert("Invalid username or password")
    );
  }

  onsignup() {
    this.router.navigate(['/signup']);
  }

}
