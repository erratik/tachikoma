import { props, createAction } from '@ngrx/store';
import { Settings } from '../../models';
import { SettingsConstants } from '../../settings.constants';

export const selectSettings = createAction(`[Settings] Selected Settings`, props<{ current: Settings }>());
export const fetchSettings = createAction(
  `${SettingsConstants.fetchSettingsAction} Fetching Settings`,
  props<{ settings: Settings[] }>()
);

export const fetchSettingsSuccess = createAction(`${SettingsConstants.fetchSettingsAction} Success`);
export const fetchSettingsFailure = createAction(
  `${SettingsConstants.fetchSettingsAction} Failure`,
  props<{ error: any }>()
);
// export const fetchSettingsRedirect = createAction(`${SettingsConstants.fetchSettingsAction} Redirect`);
