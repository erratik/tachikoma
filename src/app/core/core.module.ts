import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { MaterialModule } from '@client/material';
import { LoginPageComponent } from '@auth/containers';
import { ContainersModule } from '@containers/.';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorService } from '@services/error.service';
import { LoggerService } from '@services/logger.service';
import { AuthModule } from '@auth/.';

// export const COMPONENTS = [ LoginComponent, LogoutComponent ];

@NgModule({
  imports: [ CommonModule, RouterModule, ReactiveFormsModule, AuthModule ]
  // declarations: [ COMPONENTS ],
  // exports: [ COMPONENTS ]
})
export class CoreModule {}
