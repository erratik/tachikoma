import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BooksRoutingModule } from '@client/books/books-routing.module';
import {
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent
} from '@client/books/components';
import {
  CollectionPageComponent,
  FindBookPageComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent
} from '@client/books/containers';
import { BookEffects, CollectionEffects } from '@client/books/effects';

import * as fromBooks from '@client/books/reducers';
import { MaterialModule } from '@client/material';
import { PipesModule } from '@pipes';

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent
];

export const CONTAINERS = [
  FindBookPageComponent,
  ViewBookPageComponent,
  SelectedBookPageComponent,
  CollectionPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BooksRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ BookEffects, CollectionEffects ]),
    PipesModule
  ],
  declarations: [ COMPONENTS, CONTAINERS ]
})
export class BooksModule {}
