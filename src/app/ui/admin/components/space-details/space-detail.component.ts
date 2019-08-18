import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SettingsService } from 'src/app/ui/services/settings.service';
import { Space, Settings } from '@shared/models';

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
