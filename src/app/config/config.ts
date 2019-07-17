export interface IConfig {
  port: number;
  env: string;
  name: string;
  secretKey: string;
}

// tslint:disable-next-line
export const SECRET_KEY = 'oopsiePoopsie';

export const config: IConfig = {
  port: 4529,
  env: process.env.NODE_ENV || 'dev',
  name: 'tachikoma-admin',
  secretKey: SECRET_KEY,
};
