import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent },
  { path: 'admin/create-trip', component: CreateTripComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'update-trip/:id', component: UpdateTripComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/book', component: BookComponent },
  { path: 'home/bookdetails', component: BookingDetailsComponent },
  { path: 'home/about', component: AboutComponent },
  { path: 'quote', component: QuoteFormComponent },


  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
