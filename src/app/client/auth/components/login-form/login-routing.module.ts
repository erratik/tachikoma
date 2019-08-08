import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
