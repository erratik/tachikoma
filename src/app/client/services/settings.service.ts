import { Injectable } from '@angular/core';
import { LoggerService } from '@services/logger.service';
import { OniService } from '@client/services/oni.service';
import { Settings } from '@entities/settings/models';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  getSpaceByName(name: string): Observable<Settings> {
    return this.oni.getOne<Settings>({ endpoint: `${this.API_PATH}/${name}` });
  }
}
