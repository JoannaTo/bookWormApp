import { EventEmitter, Injectable, Output } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksChanged = new EventEmitter<Book[]>();
  booksFiltered = new EventEmitter<Book[]>();
  bookSelected = new EventEmitter<Book>();

  private books: Book[] = [
    new Book(
      'https://kbimages1-a.akamaihd.net/93affabc-5161-421e-80d5-4477a07b8cee/353/569/90/False/harry-potter-and-the-philosopher-s-stone-3.jpg',
      'Harry Potter',
      'J.K.Rowling',
      5,
      'read',
      ''
    ),
    new Book(
      'https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg',
      'Game of Thrones',
      'George R.R. Martin',
      4,
      'read',
      ''
    ),
  ];
  constructor() {}

  getBooks() {
    return this.books.slice();
  }
  addBook(newBook: Book) {
    this.books.push(newBook);
    this.booksChanged.emit(this.books.slice());
  }
  getBook(id: number) {
    return this.books.slice()[id];
  }
  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.booksChanged.emit(this.books.slice());
  }
  filterBooks(keyWord: string) {
    return this.books.filter(
      (book) =>
        book.name.toLowerCase().includes(keyWord.toLowerCase()) ||
        book.author.toLowerCase().includes(keyWord.toLowerCase())
    );
  }
  filterByStatus(status: string) {}
}
