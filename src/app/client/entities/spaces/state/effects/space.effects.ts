import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap, mergeMap, exhaust } from 'rxjs/operators';
import { SpaceApiActions } from '../actions';
import { SpaceService } from '@client/services/space.service';
import { Space } from '../../models';

@Injectable()
export class SpaceEffects {
  loadSpacePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceApiActions.initializeSpaces),
      switchMap(() =>
        this.spaceService
          .getSpaces()
          .pipe(
            tap((spaces: Space[]) => spaces),
            map((spaces) => SpaceApiActions.loadSpaces({ spaces })),
            catchError((error) => of(SpaceApiActions.loadSpacesFailure({ error })))
          )
      )
    )
  );

  storeSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceApiActions.loadSpaces),
      tap((spaces) => spaces),
      map((spaces) => SpaceApiActions.storeSpaces(spaces))
    )
  );

  loadingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceApiActions.storeSpaces),
      tap((spaces) => spaces),
      map(() => SpaceApiActions.loadSpacesSuccess())
    )
  );

  constructor(private actions$: Actions, private spaceService: SpaceService, private router: Router) {}
}
