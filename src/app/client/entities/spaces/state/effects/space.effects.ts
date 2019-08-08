import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap, mergeMap, exhaust } from 'rxjs/operators';
import { SpaceActions, SpacePageActions } from '../actions';
import { SpaceService } from '@client/services/space.service';
import { Space } from '../../models';

@Injectable()
export class SpaceEffects {

  loadSpacePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpacePageActions.loadSpacePage),
      switchMap(() =>
        this.spaceService
          .getSpaces()
          .pipe(
            tap((spaces: Space[]) => spaces),
            map((spaces) => SpacePageActions.loadSpaces({ spaces })),
            catchError((error) => of(SpacePageActions.loadSpacesFailure({ error })))
          )
      )
    )
  );

  fetchSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpacePageActions.loadSpaces),
      tap((spaces) => spaces),
      map((spaces) => SpaceActions.fetchSpaces(spaces))
    )
  );

  loadingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceActions.fetchSpaces),
      tap((spaces) => spaces),
      map(() => SpacePageActions.loadSpacesSuccess())
    )
  );

  constructor(private actions$: Actions, private spaceService: SpaceService, private router: Router) {}
}
