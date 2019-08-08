import { Injectable } from '@angular/core';
import { Space } from './space.interface';
import { OniService } from '../services/oni.service';
import { LoggerService } from '@services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  public spaces: Space[] = [];

  constructor(private oni: OniService, private logger: LoggerService) {}

  getSpaces() {
    this.oni.getAll<Space>({ endpoint: '/oni/spaces' }).then((spaces: Space[]) => {
      // this.spaces.push(...spaces.filter((x) => x.enabled !== false)); // fill cache
      this.logger.log(`Fetched ${this.spaces.length} spaces.`);
    });
    return this.spaces;
  }
}
