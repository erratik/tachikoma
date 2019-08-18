import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { User } from '@shared/auth/models';
import { AuthApiActions, AuthActions } from '@shared/auth/state/actions';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@shared/state/reducers';
import * as fromAuth from '@shared/auth/state/reducers';
import * as fromLayout from '@shared/state/reducers/layout.reducer';

import { NwbDialogConfig, NwbDialogService } from '@wizishop/ng-wizi-bulma';
import { StateSelectorService } from 'src/app/ui/services/state-selector.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SpaceApiActions } from '@shared/state/actions/spaces';
import { Space, Settings } from '@shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  dialogConfig: NwbDialogConfig = {
    title: 'Logout',
    message: 'Do you want to <b>logout</b>?',
    okButtonText: 'Yes',
    cancelButtonText: 'No',
    loading: false
  };

  layoutState$: Observable<any>;
  showSidenav: boolean;

  isLoggedIn$: Observable<boolean>;

  spaces$: Observable<Space[]>;

  settings$: Observable<Settings>;
  selectedSpace$: Observable<any>;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private store: Store<fromRoot.State & fromAuth.State>,
    private nwbDialog: NwbDialogService,
    private stateSelector: StateSelectorService
  ) {
    const user: User = this.storage.get('user');
    if (!!user) {
      const token = user.authorization[0];
      if (user && Date.parse(token.expiry) > Date.now()) {
        this.store.dispatch(AuthApiActions.loginSuccess({ user }));
        this.store.dispatch(SpaceApiActions.initializeSpaces());

        this.spaces$ = this.stateSelector.spaces$.pipe(map((spaces) => spaces));
        this.settings$ = this.stateSelector.settings$.pipe(map((settings) => settings));

        this.selectedSpace$ = this.stateSelector.space$;
      }
    }
    this.isLoggedIn$ = this.stateSelector.isLoggedIn$;
    this.layoutState$ = this.stateSelector.layoutState$;
  }

  openDialog() {
    const dialog = this.nwbDialog.open(this.dialogConfig);

    dialog.config.okHandler = () => {
      dialog.disableButtonsAndMakeOkButtonLoading();

      this.store.dispatch(AuthActions.logout());

      this.stateSelector.isLoggedIn$.subscribe(() => {
        dialog.enableButtonsAndMakeOkButtonNotLoading();
        dialog.dismiss(true);
      });
    };

    dialog.afterClosed().subscribe((fromOkButton) => {
      console.log('dialogClose, fromOkButton', fromOkButton);
      this.storage.remove('user');
      this.store.dispatch(AuthApiActions.loginRedirect());
    });
  }
}
