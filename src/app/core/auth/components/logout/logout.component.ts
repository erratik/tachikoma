import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConfigService } from '@config/config.service';
import { Router } from '@angular/router';
import { LoggerService } from '@services/logger.service';
import { AuthActions } from '@auth/state/actions';
import { Store } from '@ngrx/store';

import * as fromAuth from '@auth/state/reducers';
import * as fromRoot from '@shared/state/reducers';

@Component({
  selector: 'oni-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<div><p>Logged out succesfully.</p> <a routerLink="/login">Back to Login</a></div>'
})
export class LogoutComponent {
  // loggedIn$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State & fromAuth.State>,
    private configService: ConfigService,
    private router: Router,
    private logger: LoggerService
  ) {
    // this.logout();
  }

  logout() {
    // this.closeSidenav();
    // debugger;
    this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
