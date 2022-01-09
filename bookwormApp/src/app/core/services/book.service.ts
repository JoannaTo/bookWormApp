import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { Book } from '../models/book.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksChanged = new EventEmitter<Book[]>();
  booksFiltered = new EventEmitter<Book[]>();
  bookSelected = new EventEmitter<Book>();

  private books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor(private apiService: ApiService) {}

  fetchBooks() {
    this.apiService
      .get('book')
      .pipe(first())
      .subscribe((data) => {
        const books = data as Book[];
        this.books.next(books);
      });
  }

  getBooksAsObservable() {
    return this.books.asObservable();
  }

  getBooks() {
    return [];
    // return this.books.slice();
  }

  getBook(id: number) {
    return this.apiService.get(`book/${id}`);
  }

  filterByStatus(status: string) {}
}
