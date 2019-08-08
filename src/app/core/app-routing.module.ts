import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceResolver } from '@resolvers/entity.resolver';
import { SpaceListComponent } from '@components/space/space-list/space-list.component';
import { AuthenticationGuard } from '@auth/authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'spaces' },
  {
    path: 'login',
    // loadChildren: '@components/login/login.module#LoginModule'
    loadChildren: '@auth/auth.module#AuthModule'
  },
  {
    path: 'spaces',
    component: SpaceListComponent,
    canActivate: [ AuthenticationGuard ],
    // resolve: {
    //   spaces: SpaceResolver
    // },
    children: [
      {
        path: '',
        loadChildren: '@components/space/space.module#SpaceModule',
        resolve: [ SpaceResolver ]
      }
      // {
      //   path: 'address',
      //   component: AddressComponent
      // }
    ]
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// {
//     path: 'cloud', component: DayViewerComponent
// },
// {
//     path: 'settings', component: SettingsViewComponent
// },
// {
//     path: 'threejs', component: MapComponent
// },
