import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromAuth from '@client/auth/state/reducers';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromSpace from '@entities/spaces/state/reducers/space.reducer';
import * as fromSpacePage from '@entities/spaces/state/reducers';
import { Space } from '@entities/spaces/models';
import { StateSelectorService } from '@client/services';
import { LoggerService } from '@shared/services';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-container',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
  spaces$: Observable<Space[]>;
  // loading$: Observable<boolean>;
  // error$: Observable<string>;

  selectedSpace: Space;

  constructor(
    private store: Store<fromSpacePage.State & fromSpace.State>,
    private stateSelector: StateSelectorService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.spaces$ = this.stateSelector.spaces$.pipe(map((spaces) => spaces));
    // this.loading$ = this.stateSelector.checkFlagStatus(fromSpacePage.getSpacePageLoading);
    // this.error$ = this.stateSelector.getErrorStatus(fromSpacePage.getSpacePageError);
    // this.spaces$.subscribe();
  }
}
