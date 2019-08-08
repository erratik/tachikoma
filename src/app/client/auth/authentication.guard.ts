import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from './authentication.constants';
import { User } from './authentication.model';
import { ErrorService } from '../../core/services/error.service';
import { LoggerService } from '../../core/services/logger.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  private currentUser: User;
  constructor(
    public authService: AuthenticationService,
    public errorService: ErrorService,
    public logger: LoggerService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    this.logger.log('🖱' + url);
    if (this.authService.isUserLoggedIn()) {
      this.currentUser = this.authService.getLoggedInUser();
      return true;
    }

    this.authService.setRedirectUrl(url);
    this.router.navigate([ 'login' ]);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.currentUser.role === Roles.Admin) {
      return true;
    } else {
      this.logger.log('🔐 Unauthorized to open link: ' + state.url);
      return false;
    }
  }
}
