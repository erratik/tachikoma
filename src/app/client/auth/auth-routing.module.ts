import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '@auth/containers';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginPageComponent, data: { title: 'Login' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
