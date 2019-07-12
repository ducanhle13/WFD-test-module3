import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';

const routes: Routes = [
{
  path: 'book',
  component: BookComponent
}, {
  path: 'book/:id/detail',
  component: BookDetailComponent
}, {
  path: 'book/:id/edit',
  component: BookEditComponent
}, {
  path: 'book/create',
  component: BookCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
