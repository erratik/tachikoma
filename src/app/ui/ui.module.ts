import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from 'src/app/client/client.module';
import { ContainersModule } from '@containers/containers.module';

import { LoggerService } from '@services/logger.service';
import { HeaderComponent } from '@containers/header/header.component';
import { FooterComponent } from '@containers/footer/footer.component';
import { MainComponent } from '@containers/main/main.component';
import { RouterModule } from '@angular/router';
import { EntitiesModule } from '@client/entities/entities.module';
import { AdminModule } from '@shared/admin.module';

export const COMPONENTS = [ HeaderComponent, FooterComponent, MainComponent ];
@NgModule({
  // declarations: [ HeaderComponent, FooterComponent ],
  imports: [ CommonModule, RouterModule, ClientModule, ContainersModule, EntitiesModule, AdminModule ],
  providers: [ LoggerService ],
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UiModule {}
