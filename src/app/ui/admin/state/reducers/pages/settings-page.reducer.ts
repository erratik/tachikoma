import { createReducer, on } from '@ngrx/store';
import { SettingsApiActions } from '@shared/state/actions/settings';

export const settingsPageFeatureKey = 'settings';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export const reducer = createReducer(
  initialState,
  on(SettingsApiActions.loadSettings, (state) => ({
    ...state,
    error: null,
    pending: true
  })),
  on(SettingsApiActions.loadSettingsSuccess, (state) => ({
    ...state,
    error: null,
    pending: false
  })),
  on(SettingsApiActions.loadSettingsFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
