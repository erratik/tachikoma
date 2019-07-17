import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Space } from '../space/space.interface';

@Injectable()
export class OniService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Space) {
      // TODO: get from the database
      return Promise.resolve<any[]>([]);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
