import { Injectable, Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from '@auth/models';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoggerService, ErrorService } from '@shared/services';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { UserRoles } from '@shared/constants/user.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginUrl = '/auth/login';
  public loggedInUser$: Observable<User>;
  // private currentUser: User;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private http: HttpClient,
    private logger: LoggerService,
    private errorService: ErrorService
  ) {}

  private setUser(user: User): User {
    user.role = UserRoles[user.username];
    this.storage.set('user', user);
    return user;
  }

  login({ username, password }: Credentials): Observable<User> {
    const body = Object.entries({ username, password })
      .map(([ key, val ]) => `${key}=${encodeURIComponent(val as string)}`)
      .join('&');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post<User>(this.loginUrl, body, { headers })
      .pipe(tap((data) => this.setUser(data), (error) => this.errorService.handleError(error)));
  }

  logout() {
    return of(true);
  }
}
