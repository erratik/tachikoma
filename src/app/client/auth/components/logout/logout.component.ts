import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from '@auth/authentication.service';
import { ConfigService } from '@config/config.service';
import { Router } from '@angular/router';
import { LoggerService } from '@services/logger.service';
import { AuthActions } from '@auth/actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '@auth/reducers';
import * as fromRoot from '@reducers/.';

@Component({
  selector: 'oni-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<div><p>Logged out succesfully.</p> <a routerLink="/login">Back to Login</a></div>'
})
export class LogoutComponent {
  loggedIn$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State & fromAuth.State>,
    private authService: AuthenticationService,
    private configService: ConfigService,
    private router: Router,
    private logger: LoggerService
  ) {
    this.logout();
  }

  logout() {
    // this.closeSidenav();

    this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
