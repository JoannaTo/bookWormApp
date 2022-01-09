import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Book } from 'src/app/core/models/book.model';
import { ApiService } from 'src/app/core/services/api.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() id: number;
  currentRoute: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private apiService: ApiService
  ) {
    console.log(this.router.url);
  }

  ngOnInit(): void {}

  counter(i: number) {
    return new Array(i);
  }
  onMatchRoute(id: number) {
    this.router.navigateByUrl(`/dashboard/all/${id}`);
  }
  onDelete(id: number) {
    this.apiService
      .delete('book', id)
      .pipe(first())
      .subscribe((data) => {
        console.log('pozvalo se?');
        this.bookService.fetchBooks();
      });
  }
  onEdit(id) {
    this.router.navigate(['/dashboard/all/' + id + '/edit']);
  }
}
