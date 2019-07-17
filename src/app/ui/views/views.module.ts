import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [ContainerComponent, FooterComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewsModule {}
