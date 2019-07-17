import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Logger } from './services/logger.service';
import { OniService } from './services/oni.service';
import { SpaceService } from './space/space.service';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [ErrorService, Logger],
})
export class SharedModule {}
