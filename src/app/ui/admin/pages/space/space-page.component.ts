import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { LoggerService } from '@shared/services';

import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromPage from '@shared/state/reducers/pages';
import * as fromRoot from '@shared/state/reducers';
import { Space } from '@shared/models';
import { StateSelectorService } from 'src/app/ui/services';
import { tap, map, take } from 'rxjs/operators';
import { BaseDataComponent } from '../../components/base/base-data.component';
import { AdminSpaceActions } from '@shared/state/actions/spaces';

@Component({
  selector: 'oni-admin-space-page',
  templateUrl: './space-page.component.html',
  styles: []
})
export class SpacePageComponent extends BaseDataComponent implements OnInit {
  // spaces$: Observable<Space[]>;
  // loading$: Observable<boolean>;
  // error$: Observable<string>;

  // selectedSpace: Space;
  // space: Space;

  constructor(
    public stateSelector: StateSelectorService,
    public store?: Store<fromPage.State | fromRoot.State | fromSpace.State>,
    public route?: ActivatedRoute,
    public logger?: LoggerService
  ) {
    super(stateSelector);
  }

  ngOnInit() {
    super.ngOnInit();
    // this.data$.subscribe();
    // this.loading$ = this.stateSelector.checkFlagStatus(fromSpacePage.getSpacePageLoading);
    // this.error$ = this.stateSelector.getErrorStatus(fromSpacePage.getSpacePageError);
    // this.space$ = this.stateSelector.space$;
  }
}
