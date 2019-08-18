import { Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, take, refCount, publishLast } from 'rxjs/operators';
import { ErrorService } from '@services/error.service';
import * as fromAuth from '@shared/auth/state/reducers';
import * as fromRoot from '@shared/state/reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@shared/auth/models';
import { AuthApiActions } from '@shared/auth/state/actions';

export class OniService {
  public token: string;
  public currentUser$: Observable<any>;
  public headers: HttpHeaders;

  constructor(
    // @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private store: Store<fromRoot.State & fromAuth.State>,
    private http: HttpClient,
    private errorService: ErrorService
  ) {
    this.currentUser$ = this.store.pipe(
      select(fromAuth.getUser),
      tap(
        // (data) =>
        (user: User) => {
          // debugger;
          if (!user) {
            this.store.dispatch(AuthApiActions.loginRedirect());
            return;
          }
          this.token = user.authorization[0].token; // debugger;
          this.headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          });
        }
        // ,
        // (error) => this.errorService.handleError(error)
      )
    );
    this.currentUser$.subscribe();
  }

  public getAll<T>(options: { [key: string]: string }): Observable<T[]> {
    const items$ = this.http
      .get<T[]>(options.endpoint, { headers: this.headers })
      .pipe(tap((data) => data, (error) => this.errorService.handleError(error)));
    return items$;
  }

  public getOne<T>(options: { [key: string]: string }): Observable<T> {
    const item$ = this.http
      .get<T>(options.endpoint, { headers: this.headers })
      .pipe(tap((data) => data, (error) => this.errorService.handleError(error)));
    return item$;
  }

  // public getOne<T>(options: { [key: string]: string }): PromiseLike<T> {
  //   //  const token = this.currentUser.authorization[0].token;
  //   //  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  //   const items = this.http
  //     .get<T>(options.endpoint, { headers: this.headers })
  //     .pipe(tap((data) => data, (error) => this.errorService.handleError(error)))
  //     .toPromise();
  //   return Promise.resolve(items);
  // }
}
