// let nextId = 1;

export class Authorization {
  url: string;
  info?: Token;
  other?: any;
}

export class Credentials {
  clientId: string;
  clientSecret: string;
  grantorUrl: string;
  scopes: string;
}

export class Token {
  accessToken: string;
  refreshToken?: string;
  tokenType?: string;
  scope?: string;
  oauth?: any;
  owner: string;
  space: string;
  expiresIn: number;
  updatedAt: string;
}

export class Settings {
  // id: number;
  constructor(
    public space: string,
    public baseUrl: string,
    public owner: string,
    public cron: any,
    public credentials: Credentials,
    public auth: Authorization
  ) {
    // this.id = nextId++;
  }
}
