import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

export const COMPONENTS = [ HeaderComponent, FooterComponent, MainComponent, SidenavComponent, NotFoundComponent ];

@NgModule({
  declarations: COMPONENTS,
  imports: [ CommonModule, RouterModule ],
  exports: COMPONENTS,
  // providers: [ RouterStateSnapshot ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContainersModule {}
