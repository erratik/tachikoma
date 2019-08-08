import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OniService } from './services/oni.service';
import { ErrorService } from '@services/error.service';
import { LoggerService } from '@services/logger.service';
import { BooksModule } from './books';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule, FormsModule, BooksModule ],
  providers: [ OniService ]
})
export class ClientModule {}
