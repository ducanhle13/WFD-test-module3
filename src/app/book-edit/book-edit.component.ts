import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
    post: Book;
    bookForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private bookService: BookService,
        private fb: FormBuilder,
        private router: Router
) {}

  ngOnInit() {
      this.bookForm = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(10)]],
          author: ['', [Validators.required, Validators.minLength(10)]],
          description: ['', [Validators.required, Validators.minLength(10)]]
      });
      const id = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBookById(id).subscribe(
          next => {
              this.post = next;
              this.bookForm.patchValue(this.post);
          },
          error => {
              console.log(error);
              this.post = null;
          }
      );
  }

  onSubmit() {
      if (this.bookForm.valid) {
          const { value } = this.bookForm;
          const data = {
              ...this.post,
              ...value
          };
          this.bookService.updateBook(data).subscribe(
              next => {
                  this.router.navigate(['/book']);
              },
              error => console.log(error)
          );
      }
  }
}