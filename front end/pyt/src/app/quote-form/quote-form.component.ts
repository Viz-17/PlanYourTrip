import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../services/quote.service';
import { LogindetailsService } from '../services/logindetails.service';

@Component({
    selector: 'app-quote-form',
    templateUrl: './quote-form.component.html',
    styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
    quote: Quote = new Quote();
    submitted = false;

    constructor(private quoteService: QuoteService, public authService: LogindetailsService) { }

    ngOnInit(): void {
    }

    saveQuote() {
        this.quoteService.createQuote(this.quote).subscribe({
            next: (data) => {
                console.log(data);
                this.submitted = true;
            },
            error: (e) => console.log(e)
        });
    }

    onSubmit() {
        this.saveQuote();
    }
}
