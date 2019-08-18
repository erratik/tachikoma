import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthApiActions } from '@auth/state/actions';
import * as fromAuth from '@auth/state/reducers';
import { LoggerService } from '@shared/services';
import { Roles } from '@shared/constants/user.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private logger: LoggerService) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map((isAuthed) => {
        if (!isAuthed) {
          this.store.dispatch(AuthApiActions.loginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }

  canActivateChild(state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getUser),
      map((user) => {
        if (user.role === Roles.Admin) {
          return true;
        }

        this.logger.log('🔐 Unauthorized to open link: ' + state.url);
        return false;
      }),
      take(1)
    );
  }
}
