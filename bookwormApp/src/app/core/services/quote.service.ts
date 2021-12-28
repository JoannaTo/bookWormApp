import { Quote } from '../models/quote.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: Quote[] = [
    new Quote('Unknown', "I don't know"),
    new Quote('Unknown', "I don't "),
  ];
  chosenQuote: Quote;
  constructor() {}
  getQuotes() {
    this.pickAQuote();
    return this.chosenQuote;
  }
  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);
  }
  pickAQuote() {
    let num = Math.floor(Math.random() * this.quotes.length);
    this.chosenQuote = this.quotes[num];
  }
}
