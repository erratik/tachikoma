import { createReducer, on } from '@ngrx/store';
import { SettingsPageActions } from '../actions';

export const settingsPageFeatureKey = 'settingsPage';

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
  on(SettingsPageActions.loadSettings, (state) => ({
    ...state,
    error: null,
    pending: true
  })),
  on(SettingsPageActions.loadSettingsSuccess, (state) => ({
    ...state,
    error: null,
    pending: false
  })),
  on(SettingsPageActions.loadSettingsFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
