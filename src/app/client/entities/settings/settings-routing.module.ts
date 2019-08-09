import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SettingsPageComponent,
    data: { title: 'settings' }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SettingsRoutingModule {}
