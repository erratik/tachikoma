import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SpaceEffects } from '@shared/state/effects/spaces';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromSettings from '@shared/state/reducers/spaces/settings.reducer';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsEffects } from './state/effects/settings';
import { RouterModule } from '@angular/router';
import { ContentComponent, PageHeaderComponent, ProfileComponent, OniTplInjectorComponent } from './components';
import { SpacePageComponent, HomePageComponent } from './pages';
import ProfileDisplayDirective from './directives/profile-display.directive';

export const COMPONENTS = [
  SpacePageComponent,
  HomePageComponent,
  PageHeaderComponent,
  ContentComponent,
  ProfileComponent,
  ProfileDisplayDirective,
  OniTplInjectorComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    // NwbTabsModule,
    StoreModule.forFeature(fromSpace.spacesFeatureKey, fromSpace.reducer),
    StoreModule.forFeature(fromSettings.settingsFeatureKey, fromSettings.reducer),
    EffectsModule.forFeature([ SpaceEffects, SettingsEffects ])
  ],
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule {}
