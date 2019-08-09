import { createSelector, createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import * as fromRoot from '@reducers/.';
import * as fromSpace from '@entities/spaces/state/reducers/space.reducer';
import * as fromSpacePage from '../reducers/space-page.reducer';

export const spaceFeatureKey = 'space';

export interface SpaceState {
  [fromSpace.spacesFeatureKey]: fromSpace.State;
  [fromSpacePage.spacePageFeatureKey]: fromSpacePage.State;
}

export interface State extends fromRoot.State {
  [spaceFeatureKey]: SpaceState;
}

export function reducers(state: SpaceState | undefined, action: Action) {
  return combineReducers({
    [fromSpace.spacesFeatureKey]: fromSpace.reducer,
    [fromSpacePage.spacePageFeatureKey]: fromSpacePage.reducer
  })(state, action);
}

/**
 * Space (Page) Reducers
 */
export const mainState = createFeatureSelector<State, SpaceState>(spaceFeatureKey);

export const spacePageState = createSelector(mainState, (state: SpaceState) => state.spacePage);

export const getSpacePageError = createSelector(spacePageState, fromSpacePage.getError);
export const getSpacePageLoading = createSelector(spacePageState, fromSpacePage.getPending);

/**
 * Space Reducers
 */
export const spaceState = createSelector(mainState, (state: SpaceState) => state.space);

export const getSpaces = createSelector(spaceState, fromSpace.getSpaces);
