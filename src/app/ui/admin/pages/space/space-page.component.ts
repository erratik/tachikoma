import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
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
import { User } from '@shared/auth/models';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'oni-admin-space-page',
  templateUrl: './space-page.component.html',
  styles: []
})
export class SpacePageComponent extends BaseDataComponent implements OnInit {
  user: User;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    public stateSelector: StateSelectorService,
    public store?: Store<fromPage.State | fromRoot.State | fromSpace.State>,
    public route?: ActivatedRoute,
    public logger?: LoggerService
  ) {
    super(stateSelector);
    this.user = this.storage.get('user');
  }

  ngOnInit() {
    super.ngOnInit();
    // this.loading$.subscribe((isLoading) => {
    //   if (!isLoading) {
    //   }
    // });
  }

  get profiles(): any {
    return this.space.profiles.filter(({ owner }) => owner === this.user.username);
  }
  // TODO: Display only current user's profiles
}
