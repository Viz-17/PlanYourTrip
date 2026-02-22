import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  private baseUrl = "http://localhost:8080/api/v1/packages/home/book";

  constructor(private httpclient: HttpClient) { }

  booked(book: Book): Observable<object> {
    return this.httpclient.post(`${this.baseUrl}`, book);

  }
}

