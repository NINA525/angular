import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchMainComponent } from '../bookSearch/book-search-main/book-search-main.component';
import { SearchBoxComponent } from '../bookSearch/search-box/search-box.component';
import { DetailBoxComponent } from '../bookSearch/detail-box/detail-box.component';
import { ListBoxComponent } from '../bookSearch/list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent]
})
export class BookSearchModule { }
