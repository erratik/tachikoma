import { Inject } from '@angular/core';

import { Logger } from './logger.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { tap } from 'rxjs/operators';

export class OniService {
  public currentUser: any;
  public data: any = [];

  constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService, private http: HttpClient, private errorService: ErrorService) {
    this.currentUser = this.storage.get('currentUser');
  }

  public getAll<T>(endpoint: string): PromiseLike<T[]> {
    const token = this.currentUser.authorization[0].token;
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const items = this.http.get<T[]>(endpoint, { headers }).pipe(tap((data) => data, (error) => this.errorService.handleError(error))).toPromise();
    return Promise.resolve(items);
  }
}
