import * as SettingsConstants from './settings.constants';
import * as SpaceConstants from './space.constants';
import * as UserConstants from './user.constants';
export { SettingsConstants, SpaceConstants, UserConstants };

export enum Application {
  name = 'datawhore'
}

export enum MenuActions {
  EditSpace = 'edit-space',
  EditSettings = 'edit-settings'
}
