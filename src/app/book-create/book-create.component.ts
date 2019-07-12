import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  post: Book;
  bookForm: FormGroup;
  constructor(private bookService: BookService,
              private fb: FormBuilder) {
  }
  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
      }
    );
  }
  onSubmit() {
    if (this.bookForm.valid) {
        const {value} = this.bookForm;
        this.bookService.createBook(value).subscribe(
          next => {
                alert('add');
                this.bookForm.reset({
                    title: '',
                    author: '',
                    description: ''
                });
            }, error => console.log(error));
    }
}

 }
