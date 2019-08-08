import { Settings } from 'src/app/client/settings/settings.interface';

// let nextId = 1;
export class Space {
  name: string;
  icon: string;
  owner: string;
  profiles: any[];
  enabled: boolean;
  settings: Settings;
  // constructor(space: Space, settings: Settings) {
  //   // this.name = space.name;
  //   this.name = space.name;
  // }
}
