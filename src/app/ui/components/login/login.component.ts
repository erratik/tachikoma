import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@shared/authentication/authentication.service';
import { LoginCredentials } from '@shared/authentication/authentication.model';
import * as CryptoJS from 'crypto-js';
import { DateTime } from 'luxon';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ConfigService } from 'src/app/config/config.service';
import { Logger } from '@shared/services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'oni-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  private currentUser: any;
  public username = new FormControl('');
  public password = new FormControl('');

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private authService: AuthenticationService,
    private configService: ConfigService,
    private router: Router,
    private logger: Logger
  ) {
    this.currentUser = this.storage.get('currentUser');
    if (!!this.currentUser) {
      const authorization = this.currentUser.authorization[0];
      const expiry = Date.parse(authorization.expiry);
      const now = Date.now();
      this.currentUser.isAuthenticated = expiry > now;
      this.storage.set('currentUser', this.currentUser);
    } else {
      this.currentUser.isAuthenticated = false;
    }
  }

  public async login() {
    const credentials: LoginCredentials = {
      username: this.username.value,
      password: CryptoJS.AES.encrypt(this.password.value.trim(), this.configService.config.secretKey).toString()
    };
    this.authService.login(credentials);
  }

  ngOnInit() {
    if (this.currentUser.isAuthenticated) {
      this.router.navigate([ 'spaces' ]);
      this.logger.log(`${this.currentUser.username} already authenticated, redirecting to authorized routes.`);
    }
  }
}
