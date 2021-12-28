import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/core/models/book.model';
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
    private bookService: BookService
  ) {
    console.log(this.router.url);
  }

  ngOnInit(): void {}

  counter(i: number) {
    return new Array(i);
  }
  onMatchRoute() {
    this.router.navigateByUrl(`/dashboard/all/${this.id}`);
  }
  onDelete() {
    this.bookService.deleteBook(this.id);
  }
  onEdit() {
    this.router.navigate([this.id + '/edit'], { relativeTo: this.route });
  }
}
