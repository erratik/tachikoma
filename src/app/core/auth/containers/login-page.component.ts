import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '@auth/models';
import * as fromAuth from '@auth/state/reducers';
import { LoginPageActions } from '@auth/state/actions';

@Component({
  selector: 'oni-login-page',
  template: `
    <oni-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    >
    </oni-login-form>
  `,
  styles: []
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    // debugger;
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
