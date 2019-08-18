import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@shared/state/reducers';
import * as fromLayout from '@shared/state/reducers/layout.reducer';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import { LayoutActions } from '@shared/state/actions/';
import { StateSelectorService } from 'src/app/ui/services';
import { Observable } from 'rxjs';
import { Space, Settings } from '@shared/models';
import { AdminSpaceActions } from '@shared/state/actions/spaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, withLatestFrom } from 'rxjs/operators';
import { MenuActions } from '@constants';
import { BaseDataComponent } from '@shared/components/base/base-data.component';
@Component({
  selector: 'oni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent extends BaseDataComponent implements OnInit {
  @Input() spaces: Space[];
  @Input() selected: Space;
  @Input() layoutState: fromLayout.State;

  settings$: Observable<Settings>;
  space$: Observable<Space>;

  isSidenavOpen: boolean;
  editing: Space;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public stateSelector: StateSelectorService,
    public store: Store<fromRoot.State | fromSpace.State>,
    public route: ActivatedRoute
  ) {
    super(stateSelector);
    this.space$ = this.stateSelector.space$;
  }

  ngOnInit() {
    this.isSidenavOpen = this.layoutState.showSidenav;
  }

  selectSpace(space: Space) {
    this.store.dispatch(AdminSpaceActions.selectSpace({ id: space.name }));
  }

  editSpace($event: Event, space) {
    this.store.dispatch(AdminSpaceActions.editSpace({ space }));
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.toggle.emit(this.isSidenavOpen);
    if (this.layoutState.showSidenav) {
      this.store.dispatch(LayoutActions.closeSidenav());
    } else {
      this.store.dispatch(LayoutActions.openSidenav());
    }
  }
}
