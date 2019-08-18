import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { LoggerService } from '@shared/services';

import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromPage from '@shared/state/reducers/pages';
import { Space } from '@shared/models';
import { StateSelectorService } from 'src/app/ui/services';
import { tap, map, take } from 'rxjs/operators';
import { WrapperComponent } from '../wrapper/wrapper.component';
import * as fromRoot from '@shared/state/reducers';

@Component({
  selector: 'oni-admin-space-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent extends WrapperComponent implements OnInit {
  constructor(
    public stateSelector: StateSelectorService,
    public store: Store<fromPage.State | fromRoot.State | fromSpace.State>,
    public route: ActivatedRoute,
    public logger: LoggerService
  ) {
    super(stateSelector, store, route, logger);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
