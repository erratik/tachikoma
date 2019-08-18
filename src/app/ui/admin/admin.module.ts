import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SpaceEffects } from '@shared/state/effects/spaces';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromSettings from '@shared/state/reducers/spaces/settings.reducer';

import { SpacePageComponent } from './pages/space/space-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsEffects } from './state/effects/settings';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';

// import { NwbTabsModule } from '@wizishop/ng-wizi-bulma';
// import { SpaceRoutingModule } from './space-routing.module';

// import { SpaceDetailComponent } from './components/space-details/space-detail.component';
// import { SpaceListComponent } from './components/space-list/space-list.component';

export const COMPONENTS = [ SpacePageComponent, HomePageComponent, PageHeaderComponent ];

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
  // providers: [RouterStateSnapshot],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule {}
