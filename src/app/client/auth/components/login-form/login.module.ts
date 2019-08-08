import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from '../logout/logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ LoginComponent, LogoutComponent ],
  imports: [ CommonModule, RouterModule, ReactiveFormsModule, LoginRoutingModule ]
})
export class LoginModule {}
