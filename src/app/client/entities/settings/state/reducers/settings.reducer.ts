import { createReducer, on } from '@ngrx/store';
import { SettingsActions } from '../actions';
import { Settings } from '../../models';

export const settingsFeatureKey = 'settings';

export interface State {
  // current: Settings | null;
  // selected: Settings[] | [];
  settings: Settings[] | [];
}

export const initialState: State = {
  // current: null,
  // selected: null,
  settings: null
};

export const reducer = createReducer(
  initialState,
  on(SettingsActions.fetchSettings, (state, { settings }) => ({ ...state, settings })),
  // on(SettingsActions.selectSettings, (state, { current }) => ({ ...state, current })),
  on(SettingsActions.fetchSettingsFailure, () => initialState)
);

export const getSettings = (state: State) => state.settings;
// export const getSelectedSettings = (state: State) => state.selected;
