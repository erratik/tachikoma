import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@shared/authentication/authentication.service';
import { LoginCredentials } from '@shared/authentication/authentication.model';
import * as CryptoJS from 'crypto-js';

import { ConfigService } from 'src/app/config/config.service';
import { Logger } from '@shared/services/logger.service';

@Component({
  selector: 'oni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService, Logger],
})
export class LoginComponent implements OnInit {
  public username = new FormControl('');
  public password = new FormControl('');

  constructor(private authService: AuthenticationService, private logger: Logger, private configService: ConfigService) {}

  public async login() {
    const credentials: LoginCredentials = {
      username: this.username.value,
      password: CryptoJS.AES.encrypt(this.password.value.trim(), this.configService.config.secretKey).toString(),
    };

    this.authService.login(credentials);
  }

  ngOnInit() {}
}
