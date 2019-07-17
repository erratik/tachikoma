import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConfig, config } from './config';
import { configProd } from './config.production';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private env: string = !environment.production ? 'dev' : 'prod';

  constructor() {}

  public get isDevMode(): boolean {
    return this.env.includes('dev');
  }

  public get config(): IConfig {
    switch (environment.name) {
      case 'prod':
        return configProd;
      default:
        return config;
    }
  }
}
