import * as fromRoot from '@shared/state/reducers';
import * as fromAuth from '@shared/auth/state/reducers';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromPages from '@shared/state/reducers/pages';
// import * as fromPages from '@shared/state/reducers/pages';
import * as fromSettings from '@shared/state/reducers/spaces/settings.reducer';

import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map, take, publishReplay, refCount, publishLast, publish, tap, switchMap, filter } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { Space, Settings } from '@shared/models';
import { User } from '@shared/auth/models';

@Injectable()
export class StateSelectorService {
  getUser$: Observable<User> = this.store.pipe(select(fromAuth.getUser), map((user) => user), take(1));

  layoutState$: Observable<any> = this.store.pipe(
    select(fromRoot.getLayoutState),
    map((isAuthed) => isAuthed),
    take(1)
  );

  isLoggedIn$: Observable<boolean> = this.store.pipe(
    select(fromAuth.getLoggedIn),
    map((isAuthed) => !!isAuthed),
    tap((data) => data)
  );

  settings$: Observable<Settings> = this.store.pipe(
    select(fromRoot.getSettings),
    map((settings) => {
      return settings;
    }),
    tap((data) => data)
  );

  spaces$: Observable<Space[]> = this.store.pipe(
    select(fromRoot.getSpaces),
    map((spaces) => spaces),
    tap((data) => data)
  );

  space$: Observable<Space> = this.store.pipe(
    select(fromRoot.getSelectedSpace),
    switchMap(
      (name) =>
        !!name
          ? this.spaces$.pipe(
              map((spaces) => {
                return spaces.find((space) => space.name === name);
              })
            )
          : of(null)
    ),
    map((space) => space)
  );

  checkFlagStatus(state): Observable<boolean> {
    // debugger;
    return this.store.pipe(select(state), map((status) => !!status));
  }

  getErrorStatus(state): Observable<string> {
    return this.store.pipe(select(state), map(({ error }) => error), tap((data) => data));
  }

  constructor(
    private store: Store<fromRoot.State & fromAuth.State & fromSpace.State & fromSettings.State & fromPages.State>
  ) {}
}
