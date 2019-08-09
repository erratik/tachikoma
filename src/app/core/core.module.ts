import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth/.';

// export const COMPONENTS = [ LoginComponent, LogoutComponent ];

@NgModule({
  imports: [ CommonModule, RouterModule, ReactiveFormsModule, AuthModule ]
  // declarations: [ COMPONENTS ],
  // exports: [ COMPONENTS ]
})
export class CoreModule {}
