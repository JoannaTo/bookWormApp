import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['./all-books-page.component.scss'],
})
export class AllBooksPageComponent implements OnInit {
  selectedBook: Book;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.bookSelected.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }
}
