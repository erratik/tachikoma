import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of, combineLatest } from 'rxjs';
import { map, switchMap, tap, catchError, take, publishReplay } from 'rxjs/operators';
import { AdminSpaceActions, ViewSpacePageActions, SpaceApiActions } from '@admin-actions/.';
// import { FindSpacePageActions, SpacesApiActions } from '@admin-actions/.';
import { Space } from '@shared/models';
import { SpaceService } from 'src/app/ui/services/space.service';
import { StateSelectorService } from 'src/app/ui/services';
import { LoggerService } from '@shared/services';
import { SettingsService } from 'src/app/ui/services/settings.service';
import { AuthApiActions } from '@shared/auth/state/actions';
import { Router } from '@angular/router';

// import * as fromSpace from '@entities/spaces/state/reducers/space.reducer';
/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class SpaceEffects {
  // search$ = createEffect(
  //   () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
  //     this.actions$.pipe(
  //       ofType(FindSpacePageActions.searchSpaces),
  //       debounceTime(debounce, scheduler),
  //       switchMap(({ query }) => {
  //         if (query === '') {
  //           return empty;
  //         }

  //         const nextSearch$ = this.actions$.pipe(
  //           ofType(FindSpacePageActions.searchSpaces),
  //           skip(1)
  //         );

  //         return this.spaceService.getSpaceByName(query).pipe(
  //           takeUntil(nextSearch$),
  //           map((spaces: Space[]) => SpacesApiActions.searchSuccess({ spaces })),
  //           catchError(err =>
  //             of(SpacesApiActions.searchFailure({ errorMsg: err.message }))
  //           )
  //         );
  //       })
  //     )
  // );

  initializeSpaces$ = createEffect(() =>
    this.actions$.pipe(
      // ofType(SpaceApiActions.initializeSpaces),
      ofType(AuthApiActions.loginSuccess),
      switchMap(() => this.spaceService.getSpaces().pipe(map((spaces) => SpaceApiActions.loadSpaces({ spaces })))),
      map((spaces) => AdminSpaceActions.storeSpaces(spaces)),
      catchError((error) => of(SpaceApiActions.loadSpacesFailure({ error })))
    )
  );

  loadSpace$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminSpaceActions.selectSpace),
        switchMap(({ id }) => {
          // todo: figure out how to stop this actions from happening twice in a row...
          this.logger.log(`[SELECTING SPACE] ${id}`);
          return this.stateSelector.spaces$.pipe(
            map((spaces) => spaces.find(({ name }) => name === id)),
            tap((space) => space, (error) => AdminSpaceActions.loadSpaceFailure({ error }))
          );
        }),
        map((space) => AdminSpaceActions.loadSpace({ space }))
      )
    // { dispatch: true }
  );

  editSpace$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminSpaceActions.editSpace),
        map(({ space }) => {
          // console.log(this.router.onSameUrlNavigation);
          this.router.navigate([ 'admin', 'edit', { space } ], { skipLocationChange: true });
          return AdminSpaceActions.loadSpaceSuccess();
        }),
        take(1)
      )
    // { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private spaceService: SpaceService,
    private stateSelector: StateSelectorService,
    private router: Router,
    public logger: LoggerService
  ) {}
}
