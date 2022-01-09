import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  id: number;
  book: Book;
  bookForm = new FormGroup({
    imgPath: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    rating: new FormControl(''),
    status: new FormControl('', Validators.required),
    comment: new FormControl(''),
  });
  selectedRating: number = 0;
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
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
  updateBook() {
    this.apiService
      .patch('book', this.id, this.bookForm.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(['/dashboard/main']);
  }
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
}
