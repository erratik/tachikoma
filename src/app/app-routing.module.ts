import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
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
