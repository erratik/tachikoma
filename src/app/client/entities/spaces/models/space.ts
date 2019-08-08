import { Settings } from '@entities/settings/models';

// let nextId = 1;
export class Space {
  name: string;
  icon: string;
  owner: string;
  profiles: any[];
  enabled: boolean;
  settings: Settings;
  // constructor(space: Space, spaces: Space) {
  //   // this.name = space.name;
  //   this.name = space.name;
  // }
}
