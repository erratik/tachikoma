import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';

@Component({
  selector: 'oni-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [ './page-header.component.scss' ]
})
export class PageHeaderComponent implements OnInit {
  @Input() data$: Observable<any> = of(EMPTY);
  @Input() title = 'datawhore';
  @Input() subtitle = 'admin interface';

  constructor() {}

  ngOnInit() {
    this.data$.subscribe((data) => {
      const { title, space } = data;
      this.title = !!title ? title : this.title;
      this.subtitle = !!space ? space.name : this.subtitle;
    });
  }
}
