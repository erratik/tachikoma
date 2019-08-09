import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SpaceEffects } from '@shared/state/effects/spaces';
import * as fromSpace from '@shared/state/reducers/spaces';

// import { NwbTabsModule } from '@wizishop/ng-wizi-bulma';
// import { SpaceRoutingModule } from './space-routing.module';

// import { SpaceDetailComponent } from './components/space-details/space-detail.component';
// import { SpaceListComponent } from './components/space-list/space-list.component';
// import { SpacePageComponent } from './containers';

// export const COMPONENTS = [ SpacePageComponent, SpaceListComponent, SpaceDetailComponent ];

@NgModule({
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // NwbTabsModule,
    StoreModule.forFeature(fromSpace.spacesFeatureKey, fromSpace.reducers),
    EffectsModule.forFeature([ SpaceEffects ])
  ]
  // declarations: COMPONENTS
})
export class AdminModule {}
