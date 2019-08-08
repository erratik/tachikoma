export class LoginCredentials {
  username: string;
  password: string;
}

export class User {
  readonly authorization: Token[];
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly username: string;
  public role: string;
}

export class Token {
  expiry: string;
  scope: string;
}
