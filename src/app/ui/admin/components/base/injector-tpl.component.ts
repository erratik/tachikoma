import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'oni-inject-tpl',
  template: `<ng-content></ng-content>`
})
export class OniTplInjectorComponent implements OnInit {
  senshi = 'tsuki';
  constructor() {}

  ngOnInit() {}
}
