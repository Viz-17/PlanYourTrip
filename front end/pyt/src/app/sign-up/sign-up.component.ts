import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogindetailsService } from '../services/logindetails.service';
import { SignUpDetails } from '../sign-up-details';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:SignUpDetails=new SignUpDetails();
  constructor(private userdetails:LogindetailsService,private router:Router) { }

  ngOnInit(): void {
  }
   saveuser(){
    this.userdetails.signUp(this.user).subscribe(data => { 
      console.log(data) 
      this.GoToHome();},
      error => console.log(error));
   }
   
   GoToHome(){
    this.router.navigate(['/home']);
   }

   onSubmit()
   {
     console.log(this.user);
     this.saveuser();
   }

}
