import { Component, OnInit } from '@angular/core';
import * as fromPage from '@shared/state/reducers/pages';
import * as fromRoot from '@shared/state/reducers';
import { Observable } from 'rxjs';
import { Space } from '@models';
import { Store } from '@ngrx/store';
import { StateSelectorService } from 'src/app/ui/services';
import { LoggerService } from '@shared/services';
import { ActivatedRoute } from '@angular/router';
import { map, withLatestFrom } from 'rxjs/operators';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';

@Component({
  selector: 'oni-wrapper',
  template: '<div></div>',
  styles: []
})
export class BaseDataComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string>;

  space: Space;

  data$: Observable<any>;

  constructor(
    public stateSelector: StateSelectorService,
    public store?: Store<fromPage.State | fromRoot.State | fromSpace.State>,
    public route?: ActivatedRoute,
    public logger?: LoggerService
  ) {
    this.loading$ = this.stateSelector.checkFlagStatus(fromPage.getSpacePageLoading);
    this.error$ = this.stateSelector.getErrorStatus(fromPage.getSpacePageError);
  }

  ngOnInit() {
    // const getSpace = this.stateSelector.space$;
    this.data$ = this.route.data.pipe(
      withLatestFrom(this.stateSelector.space$),
      map(([ data, space ]) => {
        console.log(data, space);
        this.space = data.space;
        return data;
      })
    );

    // this.loading$ = of(this.space);
  }
}
