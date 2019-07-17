import { StorageServiceModule } from 'angular-webstorage-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UiModule } from '@ui/ui.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { ViewsModule } from '@ui/views/views.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StorageServiceModule, SharedModule, UiModule, ViewsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
