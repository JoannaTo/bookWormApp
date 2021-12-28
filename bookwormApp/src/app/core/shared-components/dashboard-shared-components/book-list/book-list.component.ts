import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input() filterWord: string = '';
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksChanged.subscribe((books: Book[]) => {
      this.books = books;
    });
    this.bookService.booksFiltered.subscribe(() => {
      this.books = this.bookService.filterBooks(this.filterWord);
    });
  }
}
