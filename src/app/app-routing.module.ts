import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@client/auth/services';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/spaces' },
  // {
  //   path: 'login',
  //   // loadChildren: '@components/login/login.module#LoginModule'
  //   loadChildren: '@auth/auth.module#AuthModule'
  // },
  {
    path: 'spaces',
    data: { title: 'spaces' },
    // component: SpaceListComponent,
    // canActivate: [ AuthGuard ],
    // resolve: {
    //   spaces: SpaceResolver
    // },
    children: [
      {
        path: '',
        loadChildren: '@entities/spaces/space.module#SpaceModule',
        // loadChildren: '@entities/books/books.module#BooksModule',
        canActivateChild: [ AuthGuard ]
        // resolve: [SpaceResolver],
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
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
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
