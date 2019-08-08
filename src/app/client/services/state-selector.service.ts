import * as fromRoot from '@reducers/.';
import * as fromAuth from '@client/auth/state/reducers';
import { Injectable } from '@angular/core';
import { User } from '../auth/models';
import { select, Store } from '@ngrx/store';
import { map, take, publishReplay, refCount, publishLast, publish, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class StateSelectorService {
  getUser$: Observable<User> = this.store.pipe(select(fromAuth.getUser), map((user) => user), take(1));

  isLoggedIn$: Observable<boolean> = this.store.pipe(
    select(fromAuth.getLoggedIn),
    map((isAuthed) => !!isAuthed),
    tap((data) => data)
  );

  constructor(private store: Store<fromRoot.State & fromAuth.State>) {}
}
