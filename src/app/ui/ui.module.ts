import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceService } from 'src/app/client/space/space.service';
import { ClientModule } from 'src/app/client/client.module';
import { ContainersModule } from '@containers/containers.module';

import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { LoggerService } from '@services/logger.service';
import { HeaderComponent } from '@containers/header/header.component';
import { FooterComponent } from '@containers/footer/footer.component';
import { MainComponent } from '@containers/main/main.component';
import { RouterModule } from '@angular/router';
import { SpaceModule } from './components/space/space.module';

export const COMPONENTS = [ HeaderComponent, FooterComponent, MainComponent ];
@NgModule({
  // declarations: [ HeaderComponent, FooterComponent ],
  imports: [ CommonModule, RouterModule, ClientModule, ContainersModule, SpaceModule ],
  providers: [ SpaceService, LoggerService ],
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UiModule {}
