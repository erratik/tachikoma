import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '@auth/containers';

const routes: Routes = [ { path: '', pathMatch: 'full', component: LoginPageComponent, data: { title: 'Login' } } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
