import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { SettingsResolver, SpaceResolver } from '@resolvers/entity.resolver';
import { SpacePageComponent } from './pages/space/space-page.component';
// import { SpaceResolver } from '@resolvers/entity.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    data: { title: 'home' }
  },
  {
    path: 'edit',
    pathMatch: 'prefix',
    component: SpacePageComponent,
    data: { title: 'edit space' },
    resolve: {
      space: SpaceResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
