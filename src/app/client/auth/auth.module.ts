import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@auth/state/effects';
import * as fromAuth from '@client/auth/state/reducers';

import { LoginPageComponent } from '@auth/containers';
import { LoginFormComponent, LogoutConfirmationDialogComponent } from '@auth/components';

import { MaterialModule } from '@material/.';
import { AuthRoutingModule } from './auth-routing.module';

export const COMPONENTS = [ LoginPageComponent, LoginFormComponent, LogoutConfirmationDialogComponent ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([ AuthEffects ])
  ],
  declarations: COMPONENTS
})
export class AuthModule {}
