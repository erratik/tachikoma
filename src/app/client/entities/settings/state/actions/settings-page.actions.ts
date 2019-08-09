import { createAction, props } from '@ngrx/store';
import { Settings } from '../../models';
import { SettingsConstants } from '../../settings.constants';

export const loadSettingsPage = createAction('[Settings Page]');
export const loadSettings = createAction('[Settings Page] Loading Settings...', props<{ settings: Settings[] }>());

export const loadSettingsSuccess = createAction(`${SettingsConstants.loadSettingsAction} Success`);

export const loadSettingsFailure = createAction(
  `${SettingsConstants.loadSettingsAction} Success`,
  props<{ error: any }>()
);
