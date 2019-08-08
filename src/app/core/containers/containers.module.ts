import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

// import * as MainContainer from './app/container.component';
// import * as HeaderContainer from './header/header.component';
// import * as FooterContainer from './footer/footer.component';

export const COMPONENTS = [ HeaderComponent, FooterComponent, MainComponent ];

@NgModule({
  declarations: COMPONENTS,
  imports: [ CommonModule, RouterModule ],
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContainersModule {}
