import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/core/models/book.model';
import { Quote } from 'src/app/core/models/quote.model';
import { QuoteService } from 'src/app/core/services/quote.service';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

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
    imgPath: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    rating: new FormControl(''),
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
    private apiService: ApiService,
    private quoteService: QuoteService,
    private router: Router
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
    this.bookForm.controls['rating'].setValue(this.selectedRating);
  }

  addQuote() {
    this.apiService
      .post('quote', this.quoteForm.value)
      .pipe(first())
      .subscribe((_data) => {
        this.router.navigate(['/dashboard/main']);
      });
    this.quoteForm.reset();
  }
  addBook() {
    // this.apiService
    //   .get('book')
    //   .pipe(first())
    //   .subscribe((data) => {
    //     const books = data as Book[];
    //     console.log('Response', books);
    //   });

    this.apiService
      .post('book', this.bookForm.value)
      .pipe(first())
      .subscribe((_data) => {
        this.router.navigate(['/dashboard/main']);
      });
    this.bookForm.reset();
  }
}
