import { Injectable } from '@angular/core';
import { LoggerService } from '@services/logger.service';
import { OniService } from 'src/app/ui/services/oni.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Settings } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings: Settings[] = [];

  private API_PATH = '/oni/settings';

  constructor(private oni: OniService, private http: HttpClient) {}

  getSettings(): Observable<Settings[]> {
    return this.oni.getAll<Settings>({ endpoint: this.API_PATH });
  }

  getSettingsByName(space: string): Observable<Settings> {
    return this.oni.getOne<Settings>({ endpoint: `${this.API_PATH}/${space}` });
  }

  // async getSettingsByName(space: string): Promise<Settings> {
  //   return await this.oni.getOne<Settings>({ endpoint: `${this.API_PATH}/${space}` }).then((settings: Settings) => {
  //     this.logger.log(`Fetched settings for ${space}.`);
  //     // this.spaces.push(...spaces); // fill cache
  //     return settings;
  //   });
  //   // return this.settings;
  // }
}
