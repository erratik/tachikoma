import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap, mergeMap, exhaust } from 'rxjs/operators';
import { SettingsActions, SettingsPageActions } from '../actions';
import { SettingsService } from '@client/services/settings.service';
import { Settings } from '../../models';

@Injectable()
export class SettingsEffects {
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(LoginPageActions.one),
  //     map((action) => action.credentials),
  //     exhaustMap((auth: Credentials) =>
  //       this.authService
  //         .login(auth)
  //         .pipe(
  //           map((user) => AuthApiActions.loginSuccess({ user })),
  //           catchError((error) => of(AuthApiActions.loginFailure({ error })))
  //         )
  //     )
  //   )
  // );

  loadSettingsPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsPageActions.loadSettingsPage),
      switchMap(() =>
        this.settingsService
          .getSettings()
          .pipe(
            tap((settings: Settings[]) => settings),
            map((settings) => SettingsPageActions.loadSettings({ settings })),
            catchError((error) => of(SettingsPageActions.loadSettingsFailure({ error })))
          )
      )
    )
  );

  fetchSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsPageActions.loadSettings),
      tap((settings) => settings),
      map((settings) => SettingsActions.fetchSettings(settings))
    )
  );

  loadingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.fetchSettings),
      tap((settings) => settings),
      map(() => SettingsPageActions.loadSettingsSuccess())
    )
  );

  constructor(private actions$: Actions, private settingsService: SettingsService, private router: Router) {}
}
