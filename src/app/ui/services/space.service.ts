import { Injectable } from '@angular/core';
import { LoggerService } from '@services/logger.service';
import { OniService } from 'src/app/ui/services/oni.service';
import { Space } from '@shared/models';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  public spaces: Space[] = [];

  private API_PATH = '/oni/spaces';

  constructor(private oni: OniService) {}

  getSpaces(): Observable<Space[]> {
    return this.oni.getAll<Space>({ endpoint: this.API_PATH });
  }

  // searchSpaces(queryTitle: string): Observable<Space[]> {
  //   return this.http
  //     .get<{ spaces: Space[] }>(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
  //     .pipe(map((data) => data.spaces || []));
  // }

  // getSpaceByName(name: string): Observable<Space> {
  //   return this.oni.getOne<Space>({ endpoint: `${this.API_PATH}/${name}` });
  // }
}
