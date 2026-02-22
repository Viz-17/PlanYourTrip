import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetails } from '../login-details';
import { SignUpDetails } from '../sign-up-details';

@Injectable({
  providedIn: 'root'
})
export class LogindetailsService {
  private baseUrl = "http://localhost:8080/api/v1/packages/home";

  constructor(private httpclient: HttpClient, private router: Router) { }

  signUp(user: SignUpDetails): Observable<object> {
    return this.httpclient.post(`${this.baseUrl}/signup`, user);
  }

  loginUser(user: LoginDetails): Observable<object> {
    return this.httpclient.post(`${this.baseUrl}/login`, user);
  }

  getUserList(): Observable<SignUpDetails[]> {
    return this.httpclient.get<SignUpDetails[]>(`${this.baseUrl}`);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }
}
