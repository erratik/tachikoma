import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/client/space/space.interface';
import { SettingsService } from 'src/app/client/settings/settings.service';
import { Settings } from 'src/app/client/settings/settings.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'space-detail',
  templateUrl: './space-detail.component.html'
})
export class SpaceDetailComponent implements OnInit {
  @Input() public space: Space;
  @Input() public settings: Settings[];
  tabBasicIndex = 2;

  constructor(private settingsService: SettingsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.space.settings = this.settings.find((o) => o.space === this.space.name);
    this.route.params.forEach((params: Params) => {
      if (params.basicTabIndex) {
        this.tabBasicIndex = +params.basicTabIndex;
      }
    });
  }

  tabBasicIndexChange(index) {
    console.log('tabBasicIndexChange', index);
    this.router.navigate([ '/spaces/' + index ]);
  }
}
