import { createSelector, createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import * as fromRoot from '@reducers/.';
import * as fromSettings from './settings.reducer';
import * as fromSettingsPage from './settings-page.reducer';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  [fromSettings.settingsFeatureKey]: fromSettings.State;
  [fromSettingsPage.settingsPageFeatureKey]: fromSettingsPage.State;
}

export interface State extends fromRoot.State {
  [settingsFeatureKey]: SettingsState;
}

export function reducers(state: SettingsState | undefined, action: Action) {
  return combineReducers({
    [fromSettings.settingsFeatureKey]: fromSettings.reducer,
    [fromSettingsPage.settingsPageFeatureKey]: fromSettingsPage.reducer
  })(state, action);
}

/**
 * Settings (Page) Reducers
 */
export const selectSettingsState = createFeatureSelector<State, SettingsState>(settingsFeatureKey);

export const settingsPageState = createSelector(selectSettingsState, (state: SettingsState) => state.settingsPage);

export const getSettingsPageError = createSelector(settingsPageState, fromSettingsPage.getError);
export const getSettingsPageLoading = createSelector(settingsPageState, fromSettingsPage.getPending);

/**
 * Settings Reducers
 */
export const settingsState = createSelector(selectSettingsState, (state: SettingsState) => state.settings);

export const getSettings = createSelector(settingsState, fromSettings.getSettings);
