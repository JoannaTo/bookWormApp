import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/core/models/book.model';
import { Quote } from 'src/app/core/models/quote.model';
import { BookService } from 'src/app/core/services/book.service';
import { QuoteService } from 'src/app/core/services/quote.service';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.scss'],
})
export class AddBookPageComponent implements OnInit {
  selectedRating: number = 0;
  quoteForm = new FormGroup({
    author: new FormControl('', Validators.required),
    quote: new FormControl('', Validators.required),
  });
  bookForm = new FormGroup({
    imgUrl: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    rate: new FormControl(''),
    status: new FormControl('', Validators.required),
    comment: new FormControl(''),
  });
  clicked: boolean = false;

  stars = [
    {
      id: 1,
      class: 'fas fa-star',
    },
    {
      id: 2,
      class: 'fas fa-star',
    },
    {
      id: 3,
      class: 'fas fa-star',
    },
    {
      id: 4,
      class: 'fas fa-star',
    },
    {
      id: 5,
      class: 'fas fa-star',
    },
  ];
  constructor(
    private bookService: BookService,
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {}

  onStarClick(value: number) {
    this.stars.filter((star) => {
      if (star.id <= value) {
        star.class = 'activeStar fas fa-star';
      }

      return star;
    });
    if (this.selectedRating > value) {
      console.log(this.selectedRating, value);
      if (this.stars[value].class === 'activeStar fas fa-star') {
        this.stars[value].class = 'fas fa-star';
        console.log(value);
      }
    }
    this.selectedRating = value;
    this.bookForm.controls['rate'].setValue(this.selectedRating);
  }

  addQuote() {
    let newQuote = new Quote(
      this.quoteForm.value['author'],
      this.quoteForm.value['quote']
    );
    this.quoteService.addQuote(newQuote);
  }
  addBook() {
    let newBook = new Book(
      this.bookForm.value['imgUrl'],
      this.bookForm.value['name'],
      this.bookForm.value['author'],
      this.bookForm.value['rate'],
      this.bookForm.value['status'],
      this.bookForm.value['comment']
    );
    this.bookService.addBook(newBook);
    this.bookForm.reset();
  }
}
