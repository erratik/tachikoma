import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, NEVER } from 'rxjs';

export class RouteResolver implements Resolve<any> {
  private previousUrl: string;

  constructor(public router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.refresh(state.url)) {
      this.previousUrl = state.url;
      console.log(this.router.url);
      return;
    }
    this.previousUrl = state.url;
    return NEVER;
  }

  private refresh(currentUrl: string): boolean {
    return !this.previousUrl || this.previousUrl === currentUrl;
  }
}
