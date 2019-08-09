import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SettingsEffects } from './state/effects';
import * as fromSettings from './state/reducers';

import { NwbTabsModule } from '@wizishop/ng-wizi-bulma';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsDetailComponent } from './components/settings-details/settings-detail.component';
import { SettingsListComponent } from './components/settings-list/settings-list.component';
import { SettingsPageComponent } from './containers';

export const COMPONENTS = [ SettingsPageComponent, SettingsListComponent, SettingsDetailComponent ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NwbTabsModule,
    SettingsRoutingModule,
    StoreModule.forFeature(fromSettings.settingsFeatureKey, fromSettings.reducers),
    EffectsModule.forFeature([ SettingsEffects ])
  ],
  declarations: COMPONENTS
})
export class SettingsModule {}
