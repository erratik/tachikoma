import { Component, Input } from '@angular/core';
import { Space } from '@shared/space/space.interface';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
})
export class SpaceDetailComponent {
  @Input() space: Space;
}
