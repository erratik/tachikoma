import { Injectable } from '@angular/core';
import { Settings } from './settings.interface';
import { OniService } from 'src/app/client/services/oni.service';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings[] = [];

  constructor(private oni: OniService, private logger: LoggerService) {}

  getSettings() {
    this.oni.getAll<Settings>({ endpoint: '/oni/settings' }).then((settings: Settings[]) => {
      this.logger.log(`Fetched ${settings.length} settings.`);
      this.settings.push(...settings); // fill cache
    });
    return this.settings;
  }

  getSettingsBySpace(space: string) {
    this.oni.getOne<Settings>({ endpoint: '/oni/settings/' + space }).then((settings: Settings) => {
      this.logger.log(`Fetched settings for ${space}.`);
      this.settings.push(settings); // fill cache
    });
    return this.settings.find((o) => o.space === space);
  }
}
