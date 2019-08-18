import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { Space } from '@models';
import ProfileDisplayDirective from '@shared/directives/profile-display.directive';
import { ProfileTemplates } from './templates';

@Component({
  selector: 'oni-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  @Input() space: Space;
  profileTemplate: any;

  // @ViewChild('defaultTabButtons', { static: false })
  // private defaultTabButtonsTpl: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    // console.log(this.space);
    this.profileTemplate = ProfileTemplates[this.space.name];
    // console.log(this.defaultTabButtonsTpl);
  }
}
