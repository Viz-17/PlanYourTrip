import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../quote';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {
    private baseURL = "http://localhost:8080/api/v1/quotes";

    constructor(private httpClient: HttpClient) { }

    createQuote(quote: Quote): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, quote);
    }
}
