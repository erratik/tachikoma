import { createAction, props } from '@ngrx/store';
import { Settings } from '@shared/models';
import { ActionPrefix, Entity } from '@shared/constants/settings.constants';

// export const initializeSettings = createAction(`🔁 [Initialize ${Entity.name} Data]`);
export const loadSettings = createAction(`${ActionPrefix.load}`, props<{ settings: Settings[] }>());

export const loadSettingsBySpace = createAction(`${ActionPrefix.load}`, props<{ settings: Settings }>());

export const loadSettingsSuccess = createAction(`✅${ActionPrefix.load}`);

export const loadSettingsFailure = createAction(`${ActionPrefix.load} Failure`, props<{ error: any }>());

export const storeSettings = createAction(`🗃️ Storing Settings`, props<{ settings: Settings[] }>());

export const storeSettingsByName = createAction(
  `🗂️ ${ActionPrefix.fetch} Storing Settings by name`,
  props<{ settings: Settings }>()
);
