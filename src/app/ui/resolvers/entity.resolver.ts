import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Space } from 'src/app/client/space/space.interface';

import { SpaceService } from 'src/app/client/space/space.service';

import { SettingsService } from 'src/app/client/settings/settings.service';

import { Observable, of, from } from 'rxjs';

@Injectable()
export class SpaceResolver implements Resolve<Space[]> {
  constructor(private spaceService: SpaceService, private settingsService: SettingsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Space[] {
    // let id = route.paramMap.get('country-id');
    // console.log('Resolving for country id:' + id);

    // return this.spaceService.getSpaces(id).map(country => {
    //   if (country) {
    //     return country;
    //   } else {
    //     this.router.navigate(['/country/countryList']);
    //     return null;
    //   }
    // });
    const spaces = this.spaceService.getSpaces();
    // debugger;
    return spaces;
  }
}
