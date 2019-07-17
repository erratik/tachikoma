import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/components/login/login.component';
import { SpaceListComponent } from '@ui/components/space/space-list/space-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'spaces',
    component: SpaceListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// {
//     path: 'cloud', component: DayViewerComponent
// },
// {
//     path: 'settings', component: SettingsViewComponent
// },
// {
//     path: 'threejs', component: MapComponent
// },
