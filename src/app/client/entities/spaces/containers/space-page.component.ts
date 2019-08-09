import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { LoggerService } from '@shared/services';

import * as fromSpace from '@entities/spaces/state/reducers/space.reducer';
import * as fromSpacePage from '@entities/spaces/state/reducers';
import { Space } from '@entities/spaces/models';
import { SpacePageActions, SpaceActions } from '@entities/spaces/state/actions';
import { StateSelectorService } from '@client/services';
import { tap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-space-list',
  template: `
    <oni-space-list [isLoading]="loading$ | async" [spaces]="spaces$ | async">
    </oni-space-list>
  `,
  styles: []
})
export class SpacePageComponent implements OnInit {
  spaces$: Observable<Space[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  selectedSpace: Space;
  spaces: Space[];

  constructor(
    private store: Store<fromSpacePage.State & fromSpace.State>,
    private stateSelector: StateSelectorService,
    private logger: LoggerService
  ) {
    this.store.dispatch(SpacePageActions.loadSpacePage());
  }

  ngOnInit() {
    this.loading$ = this.stateSelector.checkFlagStatus(fromSpacePage.getSpacePageLoading);
    this.error$ = this.stateSelector.getErrorStatus(fromSpacePage.getSpacePageError);
    this.spaces$ = this.stateSelector.spaces$;
  }
}
