import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'oni-content',
  template: `
    <div class="container">
      <section class="columns" *ngIf="(loading$ | async) === (false); else elseBlock">
        <ng-content></ng-content>
      </section>

      <ng-template #elseBlock>
        <progress class="progress is-small is-primary" max="100">25%</progress>
      </ng-template>
    </div>
  `
})
export class ContentComponent implements OnInit {
  @Input() loading$: Observable<boolean> = of(true);

  constructor() {}

  ngOnInit() {}
}
