import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { Space } from '@client/spaces/space.interface';

// import { SpaceService } from '@client/spacez/space.service';

import { Observable, of, from, NEVER } from 'rxjs';
import { Space, Settings } from '@models';
import { SettingsService } from 'src/app/ui/services/settings.service';
import { tap, map, catchError, filter, take } from 'rxjs/operators';
import { SettingsApiActions } from '@shared/state/actions/settings';
import * as fromRoot from '@shared/state/reducers';
import { Store } from '@ngrx/store';
import { AdminSpaceActions } from '@shared/state/actions/spaces';
import { StateSelectorService } from 'src/app/ui/services';

@Injectable()
export class SettingsResolver implements Resolve<Settings> {
  settings$: Observable<Settings>;
  constructor(
    private settingsService: SettingsService,
    private store: Store<fromRoot.State>,
    private stateSelector: StateSelectorService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const space = route.paramMap.get('space');
    // let data: Settings;
    // console.log('Resolving for country id:' + id);

    // return this.settingsService.getSettingsByName(space).map(country => {
    //   if (country) {
    //     return country;
    //   } else {
    //     this.router.navigate(['/country/countryList']);
    //     return null;
    //   }
    // });

    // this.store.dispatch(AdminSpaceActions.loadSpace({ space }));

    // const settings$ = this.settingsService.getSettingsByName(space).pipe(
    //   tap(
    //     settings => {
    //       this.store.dispatch(SettingsApiActions.loadSettingsBySpace({ settings }));
    //       // debugger;
    //       return settings;
    //     },
    //     error => SettingsApiActions.loadSettingsFailure(error)
    //   ),
    //   map(settings => settings)
    //   // catchError((error) => error)
    // );

    return new Promise<Settings>((resolve, reject) =>
      this.settingsService
        .getSettingsByName(space)
        .pipe(
          tap(
            (settings) => {
              this.store.dispatch(SettingsApiActions.loadSettingsBySpace({ settings }));
              // debugger;
              return settings;
            },
            (error) => SettingsApiActions.loadSettingsFailure(error)
          ),
          map((settings) => settings)
        )
        .subscribe((value) => resolve(value), (error) => reject(error))
    );

    // if (!!space) {
    //   settings$.subscribe(settings => {
    //     // debugger;
    //     data = settings;
    //     return data;
    //   });
    //   //   return this.settings$;
    //   // this.router.navigate([ { space } ]);debugger;
    //   //     return null;
    //   // this.router.navigate([ state.url ]);
    // }
  }
}

export class SpaceResolver implements Resolve<Space> {
  constructor(
    private stateSelector: StateSelectorService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Space> {
    const spaceName = route.paramMap.get('space');
    return new Promise<Space>((resolve, reject) =>
      this.stateSelector.spaces$
        .pipe(
          map((spaces) => {
            // debugger;

            const selectedSpace = !!spaces && !!spaceName ? spaces.find(({ name }) => name === spaceName) : null;
            if (!!selectedSpace) {
              this.store.dispatch(AdminSpaceActions.selectSpace({ id: selectedSpace.name }));
            }
            return selectedSpace;
            // } else {
            //   return null;
            // }
          }),
          tap((space) => {
            if (!!space) {
              this.store.dispatch(AdminSpaceActions.editSpace({ space: space.name }));
              return space;
            } else {
              return null;
            }
          })
          // map(
          //   (space) => {
          //     if (!!space) {
          //       debugger;

          //     }
          //     return space;
          //   }
          //   // (error) => console.log(error)
          // ),
          // map((s) => s)
        )
        .subscribe((value) => resolve(value), (error) => reject(error))
    );
  }
}
