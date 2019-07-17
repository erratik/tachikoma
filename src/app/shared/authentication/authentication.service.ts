import { Injectable, Inject } from '@angular/core';
import { Logger } from '@shared/services/logger.service';
import { LoginCredentials, User } from './authentication.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from '@shared/services/error.service';
import { catchError, retry, tap, debounce, debounceTime } from 'rxjs/operators';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public loggedInUser$: Observable<User>;

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private logger: Logger,
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  public loginUrl = '/auth/login';
  public data: any = [];

  async login(credentials: any): Promise<any> {
    const body = Object.entries(credentials)
      .map(([key, val]) => `${key}=${encodeURIComponent(val as string)}`)
      .join('&');

    this.loggedInUser$ = this.http
      .post<User>(this.loginUrl, body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .pipe(
        tap(
          // store result or log error
          data => this.saveAuthSession('currentUser', data),
          error => this.errorService.handleError(error)
        ),
        debounceTime(200),
        retry(2)
      );

    this.loggedInUser$.subscribe();
  }

  private saveAuthSession(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
    // return user to home page, logged in!
  }
}
