import { Injectable, Inject } from '@angular/core';
import { LoginCredentials, User } from './authentication.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, tap, debounce, debounceTime } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Roles, UserRoles } from './authentication.constants';
import { Router } from '@angular/router';
import { ErrorService } from '@services/error.service';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loggedInUser$: Observable<User>;
  public loginUrl = '/auth/login';
  public redirectUrl = '/';
  public isloggedIn = false;
  private currentUser: User;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private logger: LoggerService,
    private http: HttpClient,
    private errorService: ErrorService
  ) {
    this.currentUser = this.storage.get('currentUser');
    this.checkUserStatus();
  }

  private checkUserStatus(): void {
    if (!this.currentUser) {
      this.isloggedIn = false;
    } else {
      const authorization = this.currentUser.authorization[0];
      const expiry = Date.parse(authorization.expiry);
      const now = Date.now();
      this.isloggedIn = expiry > now;
    }
  }

  private loginUser(user: User): void {
    this.currentUser = user;
    this.currentUser.role = UserRoles[user.username];

    this.storage.set('currentUser', this.currentUser);
    this.isloggedIn = true;

    // this.logger.log(`${user.username} successfully authenticated`);
    // this.logger.log(this.currentUser);
  }

  public async login(credentials: any): Promise<any> {
    const body = Object.entries(credentials)
      .map(([ key, val ]) => `${key}=${encodeURIComponent(val as string)}`)
      .join('&');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.loggedInUser$ = this.http
      .post<User>(this.loginUrl, body, { headers })
      .pipe(tap((data) => this.loginUser(data), (error) => this.errorService.handleError(error)));
    this.loggedInUser$.subscribe();
    return this.currentUser;
  }

  public logout(): void {
    this.isloggedIn = false;
    this.storage.remove('currentUser');
    this.logger.log(`Logged out.`);
  }

  public isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  public getLoggedInUser(): User {
    return this.currentUser;
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
}
