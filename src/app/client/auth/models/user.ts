export interface Credentials {
  username: string;
  password: string;
}

// export interface User {
//   name: string;
// }

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
  token: string;
  scope?: string;
}
