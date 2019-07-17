import { Injectable } from '@angular/core';
import { Space } from './space.interface';
import { OniService } from '../services/oni.service';
import { Logger } from '@shared/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private spaces: Space[] = [];

  constructor(private oni: OniService, private logger: Logger) {}

  getSpaces() {
    this.oni.get<Space>({ endpoint: '/oni/spaces' }).then((spaces: Space[]) => {
      this.logger.log(`Fetched ${spaces.length} spaces.`);
      this.spaces.push(...spaces); // fill cache
    });
    return this.spaces;
  }
}
