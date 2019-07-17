import { IConfig } from './config';

export const SECRET_KEY = 'oopsiePoopsie';

export const configProd: IConfig = {
  port: 4529,
  env: process.env.NODE_ENV || 'prod',
  name: 'tachikoma-admin',
  secretKey: SECRET_KEY,
};
