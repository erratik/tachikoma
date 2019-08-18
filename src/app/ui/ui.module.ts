import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from '@shared/containers/containers.module';

import { LoggerService } from '@services/logger.service';
import { HeaderComponent } from '@shared/containers/header/header.component';
import { FooterComponent } from '@shared/containers/footer/footer.component';
import { MainComponent } from '@shared/containers/main/main.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from '@shared/admin.module';
import { SidenavComponent } from '@shared/containers/sidenav/sidenav.component';
import { NotFoundComponent } from '@shared/containers';
import { OniService, StateSelectorService } from './services';
import { ErrorService } from '@shared/services';
import { HttpClientModule } from '@angular/common/http';

export const COMPONENTS = [ HeaderComponent, FooterComponent, MainComponent, SidenavComponent, NotFoundComponent ];
@NgModule({
  // declarations: [ HeaderComponent, FooterComponent ],
  imports: [ CommonModule, HttpClientModule, RouterModule, ContainersModule, AdminModule ],
  providers: [ OniService, StateSelectorService, ErrorService, LoggerService ],
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UiModule {}
