import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { User } from '@client/auth/models';
import { AuthApiActions, AuthActions } from '@client/auth/state/actions';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@reducers/.';
import * as fromAuth from '@client/auth/state/reducers';

import { NwbDialogConfig, NwbDialogService } from '@wizishop/ng-wizi-bulma';
import { StateSelectorService } from '@client/services/state-selector.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SpaceApiActions } from '@client/entities/spaces/state/actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  dialogConfig: NwbDialogConfig = {
    title: 'Logout',
    message: 'Do you want to <b>logout</b>?',
    okButtonText: 'Yes',
    cancelButtonText: 'No',
    loading: false
  };
  isLoggedIn$: Observable<boolean>;

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
      }
    }
    this.isLoggedIn$ = this.stateSelector.isLoggedIn$;
  }

  ngOnInit(): void {}

  logout() {}

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
