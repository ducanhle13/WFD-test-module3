import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: Book[] = [];
  bookForm: FormGroup;
  constructor(
  private bookService: BookService,
) {}

ngOnInit() {
    this.bookService
        .getBooks()
        .subscribe(next => (this.bookList = next), error => (this.bookList = []));
}

onSubmit() {
}

deletePost(i) {
  const post = this.bookList[i];
  this.bookService.deleteBook(post.id).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== post.id);
  });
}
}
