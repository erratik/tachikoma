import { Settings } from '@entities/settings/models';

export class Space {
  id: string;
  name: string;
  icon: string;
  owner: string;
  profiles: any[];
  enabled: boolean;
  settings: Settings;
}
