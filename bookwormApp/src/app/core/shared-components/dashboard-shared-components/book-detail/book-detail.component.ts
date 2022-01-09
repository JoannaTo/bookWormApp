import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    console.log(this.book);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.bookService.getBook(this.id).subscribe((data) => {
        this.book = data;
      });
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}
