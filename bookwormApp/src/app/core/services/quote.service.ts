import { Quote } from '../models/quote.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private apiService: ApiService) {}

  getAllQuotes() {
    return this.apiService.get('quote');
  }
}
