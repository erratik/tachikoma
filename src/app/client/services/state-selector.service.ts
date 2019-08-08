import * as fromRoot from '@reducers/.';
import * as fromAuth from '@client/auth/state/reducers';
// import * as fromSpace from '@entities/spaces/state/reducers/space.reducer';
import * as fromSpace from '@entities/spaces/state/reducers';
import * as fromSettings from '@entities/settings/state/reducers';

import { Injectable } from '@angular/core';
import { User } from '../auth/models';
import { select, Store } from '@ngrx/store';
import { map, take, publishReplay, refCount, publishLast, publish, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Space } from '@client/entities/spaces/models';
import { Settings } from '@client/entities/settings/models';

@Injectable()
export class StateSelectorService {
  getUser$: Observable<User> = this.store.pipe(select(fromAuth.getUser), map((user) => user), take(1));

  isLoggedIn$: Observable<boolean> = this.store.pipe(
    select(fromAuth.getLoggedIn),
    map((isAuthed) => !!isAuthed),
    tap((data) => data)
  );

  settings$: Observable<Settings[]> = this.store.pipe(
    select(fromSettings.getSettings),
    map((settings) => settings),
    tap((data) => data)
  );

  spaces$: Observable<Space[]> = this.store.pipe(
    select(fromSpace.getSpaces),
    map((spaces) => spaces),
    tap((data) => data)
  );

  checkFlagStatus(state): Observable<boolean> {
    return this.store.pipe(select(state), map((status) => !!status));
  }

  getErrorStatus(state): Observable<string> {
    return this.store.pipe(select(state), map(({ error }) => error), tap((data) => data));
  }

  constructor(private store: Store<fromRoot.State & fromAuth.State & fromSpace.State & fromSettings.State>) {}
}
