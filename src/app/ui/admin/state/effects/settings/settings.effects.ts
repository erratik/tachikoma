import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap, mergeMap, exhaust } from 'rxjs/operators';
import { SettingsService } from 'src/app/ui/services/settings.service';
import { SettingsApiActions, AdminSettingsActions } from '@shared/state/actions/settings';
import { AdminSpaceActions } from '@shared/state/actions/spaces';

@Injectable()
export class SettingsEffects {
  // initializeSettings$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SettingsApiActions.initializeSettings),
  //     switchMap(() =>
  //       this.settingsService.getSettings().pipe(
  //         tap((settings: Settings[]) => settings),
  //         map(settings => SettingsApiActions.loadSettings({ settings })),
  //         catchError(error => of(SettingsApiActions.loadSettingsFailure({ error })))
  //       )
  //     )
  //   )
  // );

  // storeSpaces$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SettingsApiActions.loadSettings),
  //     tap(settings => settings),
  //     map(settings => SettingsApiActions.storeSettings(settings))
  //   )
  // );

  selectSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminSettingsActions.selectSettings),
        switchMap(({ settings }) =>
          this.settingsService
            .getSettingsByName(settings.space)
            .pipe(
              map(
                (retrievedSettings) => SettingsApiActions.loadSettingsBySpace({ settings: retrievedSettings }),
                (error) => SettingsApiActions.loadSettingsFailure(error)
              )
            )
        ),
        map((settings) => settings)
      ),
    { dispatch: true }
  );

  // loadSettingsBySpace$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(SettingsApiActions.loadSettingsBySpace),
  //       map(({ settings }) => AdminSettingsActions.selectSettings({ settings })),
  //       tap((settings) => settings)
  //     )
  //   // { dispatch: true }
  // );

  // loadingSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SettingsApiActions.storeSettings),
  //     tap(settings => settings),
  //     map(() => SettingsApiActions.loadSettingsSuccess())
  //   )
  // );

  constructor(private actions$: Actions, private settingsService: SettingsService, private router: Router) {}
}
