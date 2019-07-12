import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
    post: Book;
    constructor(
    private route: ActivatedRoute,
    private bookService: BookService
) {}

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBookById(id).subscribe(
          next => {
              this.post = next;
              console.log(next)
        } ,
          error => {
              console.log(error);
              this.post = null;
          }
      );
  }
}
