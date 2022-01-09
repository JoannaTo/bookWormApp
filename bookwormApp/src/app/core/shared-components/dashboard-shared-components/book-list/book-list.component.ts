import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Book } from 'src/app/core/models/book.model';
import { ApiService } from 'src/app/core/services/api.service';
import { BookService } from 'src/app/core/services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  searchWord = '';

  books: Book[];
  filteredBooks: Book[];
  @Input() filterWord: string = '';

  constructor(private bookService: BookService) {
    bookService.fetchBooks();
  }
  ngOnInit(): void {
    this.bookService.getBooksAsObservable().subscribe((data) => {
      this.books = data;
      this.filteredBooks = data;
    });
  }

  onEnter(status: string) {
    this.filteredBooks = this.books;

    if (this.searchWord) {
      this.filteredBooks = this.filteredBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(this.searchWord.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchWord.toLowerCase())
      );
    }

    if (status.toLowerCase() != 'choose...') {
      this.filteredBooks = this.filteredBooks.filter(
        (book) => book.status.toLowerCase() == status
      );
    }
  }
}
