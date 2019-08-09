import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { FindSpacePageActions, SpacesApiActions, AdminSpaceActions, ViewSpacePageActions } from '@admin-actions/.';
import { Space } from '@client/entities/spaces/models';
import { SpaceService } from '@client/services/space.service';
import { StateSelectorService } from '@client/services';
import { LoggerService } from '@shared/services';
import { SpaceActions } from '@client/entities/spaces/state/actions';
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

  selectSpace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewSpacePageActions.selectSpace),
      switchMap(({ id }) => {
        this.logger.log(`[SELECTING SPACE] ${id}`);
        return this.stateSelector.spaces$.pipe(
          map((spaces) => spaces.find(({ name }) => name === id)),
          tap(
            (space) => AdminSpaceActions.loadSpace({ space }),
            (error) => AdminSpaceActions.loadSpaceFailure({ error })
          )
        );
      }),
      map((data) => AdminSpaceActions.loadSpaceSuccess({ data }))
    )
  );

  // selectedSpace$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AdminSpaceActions.loadSpace),
  //       map(({ space }) => SpaceActions.selectSpace({ current: space })),
  //       tap((x) => x)
  //     ),
  //   { dispatch: true }
  // );

  constructor(
    private actions$: Actions,
    private spaceService: SpaceService,
    private stateSelector: StateSelectorService,
    public logger: LoggerService
  ) {}
}
