import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LoggerService } from '@shared/services';
import { Space } from '../../models';
import { Store } from '@ngrx/store';
import * as fromSpace from '../../state/reducers';

@Component({
  selector: 'oni-space-list',
  templateUrl: './space-list.component.html'
})
export class SpaceListComponent implements OnInit {
  @Input() isLoading = true;
  @Input() spaces: Space[] = [];
  // selectedSpace: Space;
  // spaces: Space[];

  // private spaceService: SpaceService,
  // private spacesService: SpaceService,
  // private route: ActivatedRoute,
  // private router: Router
  constructor(private store: Store<fromSpace.State>, private logger: LoggerService) {
    // this.spaces = this.settingsService.getSpace();
  }

  ngOnInit() {
    // console.log('spaces', this.spaces);
  }

  selectSpace(space: Space) {
    this.logger.log('dootdoot');

    // this.selectedSpace = space;
    // this.router.navigate(['spaces', { space: this.selectedSpace.name }]);
  }
}
