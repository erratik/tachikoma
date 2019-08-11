import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LoggerService } from '@shared/services';
import { Space } from '../../models';
import { Store } from '@ngrx/store';
import * as fromSpace from '../../state/reducers';
import { ViewSpacePageActions, AdminSpaceActions } from '@shared/state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'oni-space-list',
  templateUrl: './space-list.component.html'
})
export class SpaceListComponent implements OnInit {
  @Input() isLoading = true;
  @Input() spaces: Space[] = [];
  // selectedSpace: Space;
  // spaces: Space[];

  constructor(private store: Store<fromSpace.State>, private logger: LoggerService, private router: Router) {}

  ngOnInit() {}

  selectSpace(space: Space) {
    this.store.dispatch(AdminSpaceActions.selectSpace({ id: space.name }));
  }
}
