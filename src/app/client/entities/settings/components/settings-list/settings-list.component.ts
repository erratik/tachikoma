import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LoggerService } from '@shared/services';
import { Settings } from '../../models';
import { Store } from '@ngrx/store';
import * as fromSettings from '../../state/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'oni-settings-list',
  templateUrl: './settings-list.component.html'
})
export class SettingsListComponent implements OnInit {
  @Input() isLoading = true;
  @Input() settings: Settings[] = [];
  selectedSettings: Settings;
  // settings: Settings[];

  // private settingsService: SettingsService,
  // private settingsService: SettingsService,
  // private route: ActivatedRoute,
  //
  constructor(private store: Store<fromSettings.State>, private logger: LoggerService, private router: Router) {}

  ngOnInit() {}

  selectSettings(settings: Settings) {
    // this.logger.log('dootdoot');
    // this.selectedSettings = settings;
    // this.router.navigate([ 'settings', { space: this.selectedSettings.space } ]);
  }
}
