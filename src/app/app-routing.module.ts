import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@client/auth/services';
import { RouteResolver } from '@resolvers/route.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/spaces'
    // resolve: [ RouteResolver ],
    // runGuardsAndResolvers: 'always'
  },
  {
    path: 'spaces',
    pathMatch: 'full',
    data: { title: 'spaces' },
    loadChildren: '@entities/spaces/space.module#SpaceModule'
  },
  {
    path: 'settings',
    pathMatch: 'prefix',
    data: { title: 'settings' },

    loadChildren: '@entities/settings/settings.module#SettingsModule'
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
