import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@reducers/.';
import { LayoutActions } from '@shared/actions';
import { StateSelectorService } from '@client/services';
import { Observable } from 'rxjs';
import { Space } from '@client/entities/spaces/models';
import { ViewSpacePageActions, AdminSpaceActions } from '@shared/state/actions';
@Component({
  selector: 'oni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {
  @Input() spaces: Space[];
  layoutState$: Observable<any>;
  // spaces$: Observable<any>;
  isSidenavOpen = false;
  constructor(private store: Store<fromRoot.State>, private stateSelector: StateSelectorService) {
    this.layoutState$ = this.stateSelector.layoutState$;
    // this.spaces$ = this.stateSelector.spaces$;
  }

  ngOnInit() {
    // debugger;
    // this.layoutState.subscribe();
  }

  selectSpace(space: Space) {
    this.store.dispatch(AdminSpaceActions.selectSpace({ id: space.name }));
  }
  toggleSidenav(): void {
    this.layoutState$.subscribe((layout) => {
      this.isSidenavOpen = !this.isSidenavOpen;
      if (layout.showSidenav) {
        this.store.dispatch(LayoutActions.closeSidenav());
      } else {
        this.store.dispatch(LayoutActions.openSidenav());
      }
    });
  }
}
