import { Injectable, Inject } from '@angular/core';
import { Logger } from '@shared/services/logger.service';
import { LoginCredentials, User } from './authentication.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from '@shared/services/error.service';
import { catchError, retry, tap, debounce, debounceTime } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loggedInUser$: Observable<User>;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private logger: Logger,
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  public loginUrl = '/auth/login';
  public data: any = [];

  async login(credentials: any): Promise<any> {
    const body = Object.entries(credentials).map(([ key, val ]) => `${key}=${encodeURIComponent(val as string)}`).join('&');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.loggedInUser$ = this.http
      .post<User>(this.loginUrl, body, { headers })
      .pipe(tap((data) => this.storeUserAuthorization('currentUser', data), (error) => this.errorService.handleError(error)));
    this.loggedInUser$.subscribe();
  }

  private storeUserAuthorization(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
    this.logger.log(this.data[key]);
  }
}
