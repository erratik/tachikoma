import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromAuth from '@auth/reducers';
import * as fromRoot from '@reducers/.';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-container',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromAuth.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */

    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  ngOnInit() {}
}
