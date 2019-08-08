import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OniService } from './services/oni.service';
import { ErrorService } from '@services/error.service';
import { LoggerService } from '@services/logger.service';
import { StateSelectorService } from './services/state-selector.service';
import { SpaceModule } from './entities/spaces';
// import { SpaceService } from './space/services/space.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule, FormsModule, SpaceModule ],
  providers: [
    // SpaceService,
    OniService,
    StateSelectorService,
    ErrorService,
    LoggerService
  ]
})
export class ClientModule {}
