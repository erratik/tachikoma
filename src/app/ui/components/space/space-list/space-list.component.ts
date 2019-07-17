import { Component, OnInit } from '@angular/core';
import { SpaceService } from '@shared/space/space.service';
import { Space } from '@shared/space/space.interface';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  providers: [SpaceService],
})
export class SpaceListComponent implements OnInit {
  spaces: Space[];
  selectedSpace: Space;

  constructor(private service: SpaceService) {}

  ngOnInit() {
    this.spaces = this.service.getSpaces();
  }

  selectSpace(space: Space) {
    this.selectedSpace = space;
  }
}
