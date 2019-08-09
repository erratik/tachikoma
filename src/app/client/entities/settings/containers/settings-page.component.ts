import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { LoggerService } from '@shared/services';

import * as fromSettings from '@entities/settings/state/reducers/settings.reducer';
import * as fromSettingsPage from '@entities/settings/state/reducers';
import { Settings } from '@entities/settings/models';
import { SettingsPageActions, SettingsActions } from '@entities/settings/state/actions';
import { StateSelectorService } from '@client/services';

@Component({
  selector: 'app-settings-list',
  template: `
    <oni-settings-list [isLoading]="loading$ | async" [settings]="settings$ | async">
    </oni-settings-list>
  `,
  styles: []
})
export class SettingsPageComponent implements OnInit {
  settings$: Observable<Settings[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  selectedSettings: Settings;
  settings: Settings[];

  constructor(
    private store: Store<fromSettingsPage.State & fromSettings.State>,
    private stateSelector: StateSelectorService,
    private logger: LoggerService
  ) {
    // this.settings = this.settingsService.getSettings();
    this.store.dispatch(SettingsPageActions.loadSettingsPage());
  }

  ngOnInit() {
    this.loading$ = this.stateSelector.checkFlagStatus(fromSettingsPage.getSettingsPageLoading);
    this.error$ = this.stateSelector.getErrorStatus(fromSettingsPage.getSettingsPageError);
    this.settings$ = this.stateSelector.settings$;
    // this.settings$ = this.stateSelector.settings$;
    // this.settings$.subscribe();
  }

  selectSettings() {
    this.logger.log('dootdoot');
    // this.selectedSettings = settings;
    // this.router.navigate(['settings', { settings: this.selectedSettings.name }]);
  }
}
