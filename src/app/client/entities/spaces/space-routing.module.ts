import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacePageComponent } from './containers';
import { RouteResolver } from '@resolvers/route.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SpacePageComponent,
    data: { title: 'spaces' },
    resolve: [ RouteResolver ],
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpaceRoutingModule {}
