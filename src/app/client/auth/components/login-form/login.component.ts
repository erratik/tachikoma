import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@auth/authentication.service';
import { LoginCredentials, User } from '@auth/authentication.model';
import * as CryptoJS from 'crypto-js';
import { DateTime } from 'luxon';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ConfigService } from '@config/config.service';
import { Router } from '@angular/router';
import { LoggerService } from '@services/logger.service';

@Component({
  selector: 'oni-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  public isLoggedIn: boolean;
  public username = new FormControl('');
  public password = new FormControl('');

  constructor(
    private authService: AuthenticationService,
    private configService: ConfigService,
    private router: Router,
    private logger: LoggerService
  ) {
    this.isLoggedIn = this.authService.isloggedIn;
  }

  public get currentUser(): Partial<User> {
    return this.authService.getLoggedInUser();
  }

  public async login() {
    const credentials: LoginCredentials = {
      username: this.username.value,
      password: CryptoJS.AES.encrypt(this.password.value.trim(), this.configService.config.secretKey).toString()
    };
    this.authService.login(credentials).then((data) => {
      this.authService.isloggedIn = !!data;
      this.router.navigate([ this.authService.redirectUrl ]);
    });
  }
}
