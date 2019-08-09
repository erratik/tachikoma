import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceModule } from './spaces';
import { SettingsModule } from './settings';
import { LoggerService } from '@shared/services';

@NgModule({
  declarations: [],
  imports: [ CommonModule, SpaceModule, SettingsModule ],
  providers: [ LoggerService ]
})
export class EntitiesModule {}
