import { Settings } from './settings';

export class Space {
  id: string;
  name: string;
  icon: string;
  owner: string;
  profiles: any[];
  enabled: boolean;
  settings: Settings;
}
