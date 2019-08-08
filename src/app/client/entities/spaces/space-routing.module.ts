import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacePageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SpacePageComponent,
    data: { title: 'Spaces' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceRoutingModule {}
