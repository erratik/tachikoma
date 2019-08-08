import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OniService } from './services/oni.service';
import { ErrorService } from '@services/error.service';
import { LoggerService } from '@services/logger.service';
import { BooksModule } from './books';
import { StateSelectorService } from './services/state-selector.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule, FormsModule, BooksModule ],
  providers: [ OniService, StateSelectorService ]
})
export class ClientModule {}
