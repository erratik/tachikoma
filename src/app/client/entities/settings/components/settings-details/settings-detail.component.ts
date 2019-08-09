import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Settings } from '../../models';
import { SettingsService } from '@client/services/settings.service';

@Component({
  selector: 'settings-detail',
  templateUrl: './settings-detail.component.html'
})
export class SettingsDetailComponent implements OnInit {
  @Input() public settings: Settings[];
  tabBasicIndex = 2;

  constructor(private settingsService: SettingsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // this.settings = this.settings.find((o) => o.space === this.settings.space);
    this.route.params.forEach((params: Params) => {
      if (params.basicTabIndex) {
        this.tabBasicIndex = +params.basicTabIndex;
      }
    });
  }

  tabBasicIndexChange(index) {
    console.log('tabBasicIndexChange', index);
    this.router.navigate([ '/settings/' + index ]);
  }
}
