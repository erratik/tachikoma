import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceListComponent } from './space-list/space-list.component';
import { Space } from 'src/app/client/space/space.interface';
import { SpaceResolver } from '../../resolvers/entity.resolver';

const routes: Routes = [
  // {
  //   path: ':space',
  //   pathMatch: 'full',
  //   component: SpaceListComponent
  // }
  // {
  //   path: 'logout',
  //   pathMatch: 'full',
  //   component: LogoutComponent
  // }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpaceRoutingModule {}
