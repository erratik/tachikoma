import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [ CommonModule, RouterModule, ReactiveFormsModule, AuthModule ]
})
export class CoreModule {}
