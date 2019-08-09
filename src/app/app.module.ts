import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS, metaReducers } from '@reducers/.';
import { UserEffects, RouterEffects } from '@effects/.';

import { ClientModule } from '@client/client.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from '@containers/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService } from '@services/logger.service';
import { ErrorService } from '@services/error.service';
import { UiModule } from './ui/ui.module';
import { NwbDialogService, NwbDialogComponent, NwbDialogModule } from '@wizishop/ng-wizi-bulma';
import { LogoutConfirmationDialogComponent } from '@auth/components';
import { StateSelectorService } from '@client/services/state-selector.service';
import { EntitiesModule } from './client/entities/entities.module';
import { RouteResolver } from '@resolvers/route.resolver';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    RouterModule,
    NwbDialogModule,

    AppRoutingModule,
    CoreModule,
    ClientModule,
    UiModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'tachikoma: datawhore admin via oni api'

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([ UserEffects, RouterEffects ]),

    EntitiesModule
  ],
  providers: [ RouteResolver, ErrorService, LoggerService, StateSelectorService, NwbDialogService ],
  bootstrap: [ AppComponent ],
  exports: [ MainComponent ],
  entryComponents: [ LogoutConfirmationDialogComponent, NwbDialogComponent ]
})
export class AppModule {
  // public currentUser: any;
  // constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService) {
  //   this.currentUser = this.storage.get('currentUser');
  // }
}
