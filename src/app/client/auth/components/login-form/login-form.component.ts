import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

import { Credentials, User } from '@auth/models';
import { ConfigService } from '@config/config.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AuthApiActions } from '@client/auth/state/actions';

@Component({
  selector: 'oni-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private configService: ConfigService) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      const credentials: Credentials = {
        username: this.form.controls.username.value,
        password: CryptoJS.AES
          .encrypt(this.form.controls.password.value.trim(), this.configService.config.secretKey)
          .toString()
      };
      this.submitted.emit(credentials);
    }
  }
}
