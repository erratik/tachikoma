import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromSpacePage from '@shared/state/reducers/pages';
import { Space } from '@shared/models';
import { StateSelectorService } from 'src/app/ui/services';
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
  // spaces$: Observable<Space[]>;
  // loading$: Observable<boolean>;
  // error$: Observable<string>;

  selectedSpace: Space;

  constructor(
    private store: Store<fromSpacePage.State & fromSpace.State>,
    private stateSelector: StateSelectorService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    // this.spaces$ = this.stateSelector.spaces$.pipe(map((spaces) => spaces));
    // // this.loading$ = this.stateSelector.checkFlagStatus(fromSpacePage.getSpacePageLoading);
    // // this.error$ = this.stateSelector.getErrorStatus(fromSpacePage.getSpacePageError);
    // // this.spaces$.subscribe();
  }
}
