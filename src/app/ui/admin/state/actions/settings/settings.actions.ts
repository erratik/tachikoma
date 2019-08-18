import { createAction, props } from '@ngrx/store';
import { Settings } from '@shared/models';

// export const loadSettings = createAction('[Settings Exists Guard] Load Settings', props<{ settings: Settings }>());

// export const loadSettingsSuccess = createAction(
//   '[Settings Exists Guard] Loaded Settings Successfully',
//   props<{ data: any }>()
// );

// export const loadSettingsFailure = createAction(
//   '[Settings Exists Guard] Failure Loading Settings',
//   props<{ error: any }>()
// );

export const selectSettings = createAction(`Select Settings`, props<{ settings: Settings }>());

// export const deselectSettinsg = createAction(`${pagePrefix} De-select Settings`, props<{ space: string }>());
