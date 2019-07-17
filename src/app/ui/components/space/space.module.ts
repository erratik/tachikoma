import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceDetailComponent } from './space-details/space-detail.component';
import { SpaceService } from '@shared/space/space.service';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SpaceListComponent, SpaceDetailComponent ],
  imports: [ CommonModule, FormsModule, SharedModule, SpaceRoutingModule ],
  providers: [ SpaceService ]
})
export class SpaceModule {}
