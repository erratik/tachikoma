import { createReducer, on } from '@ngrx/store';
import { SpacePageActions, SpaceActions } from '../actions';

export const spacePageFeatureKey = 'spacePage';

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
  on(SpacePageActions.loadSpaces, (state) => ({
    ...state,
    error: null,
    pending: true
  })),
  on(SpacePageActions.loadSpacesSuccess, (state) => ({
    ...state,
    error: null,
    pending: false
  })),
  on(SpacePageActions.loadSpacesFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
