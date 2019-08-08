import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NwbTabsModule } from '@wizishop/ng-wizi-bulma';

import { SpaceRoutingModule } from './space-routing.module';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceDetailComponent } from './space-details/space-detail.component';
import { SpaceService } from 'src/app/client/space/space.service';
import { ClientModule } from 'src/app/client/client.module';
import { FormsModule } from '@angular/forms';
import { SpaceResolver } from '../../resolvers/entity.resolver';
@NgModule({
  declarations: [ SpaceListComponent, SpaceDetailComponent ],
  imports: [ CommonModule, FormsModule, ClientModule, SpaceRoutingModule, NwbTabsModule ],
  providers: [ SpaceService, SpaceResolver ]
})
export class SpaceModule {}
