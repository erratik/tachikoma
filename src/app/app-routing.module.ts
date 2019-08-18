import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/auth/services';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin'
  },
  {
    path: 'admin',
    data: { title: 'admin' },

    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        runGuardsAndResolvers: 'always',
        loadChildren: '@admin/admin.module.ts#AdminModule',
        canActivateChild: [ AuthGuard ]
      }

    ]
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
