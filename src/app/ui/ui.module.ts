import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpaceService } from '@shared/space/space.service';
import { LoginComponent } from '@ui-components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { ViewsModule } from '@ui-views/views.module';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { Logger } from '@shared/services/logger.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SharedModule, ViewsModule],
  providers: [SpaceService, Logger],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
