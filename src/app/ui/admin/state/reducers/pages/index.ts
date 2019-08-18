import { createSelector, createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import * as fromRoot from '@shared/state/reducers';
import * as fromSettings from '@shared/state/reducers/pages/settings-page.reducer';
import * as fromSpacePage from '@shared/state/reducers/pages/space-page.reducer';

// export const pagesFeatureKey = 'pages';

// export interface PageState {
//   // [pagesFeatureKey]: fromRoot.State;
//   [fromSettings.settingsPageFeatureKey]: fromSettings.State;
//   [fromSpacePage.spacePageFeatureKey]: fromSpacePage.State;
// }

// export interface State extends fromRoot.State {
//   [pagesFeatureKey]: PageState;
// }
// export function reducers(state: PageState | undefined, action: Action) {
//   return combineReducers({
//     [fromSettings.settingsPageFeatureKey]: fromSettings.reducer,
//     [fromSpacePage.spacePageFeatureKey]: fromSpacePage.reducer
//   })(state, action);
// }

export const pagesFeatureKey = 'pages';

export interface PagesState {
  // [fromSearch.searchFeatureKey]: fromSearch.State;
  // [fromSpaces.spacesFeatureKey]: fromSpaces.State;

  // [pagesFeatureKey]: fromRoot.State;
  [fromSettings.settingsPageFeatureKey]: fromSettings.State;
  [fromSpacePage.spacePageFeatureKey]: fromSpacePage.State;
  // [fromCollection.collectionFeatureKey]: fromCollection.State;
}

// export interface State extends fromSettings.State, fromSpacePage.State {
//   [pagesFeatureKey]: PagesState;
// }

export interface State extends fromSettings.State, fromSpacePage.State {
  // [spacesFeatureKey]: SpacesState;
  [pagesFeatureKey]: PagesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: PagesState | undefined, action: Action) {
  return combineReducers({
    [fromSettings.settingsPageFeatureKey]: fromSettings.reducer,
    [fromSpacePage.spacePageFeatureKey]: fromSpacePage.reducer
    // [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

/**
 * Space (Page) Reducers
 */
export const mainState = createFeatureSelector<State, PagesState>('pages');

export const spacePageState = createSelector(mainState, (state: PagesState) => state.spaces);

export const getSpacePageError = createSelector(spacePageState, fromSpacePage.getError);
export const getSpacePageLoading = createSelector(spacePageState, fromSpacePage.getPending);

// /**
//  * Space Reducers
//  */
// export const spaceState = createSelector(mainState, (state: SpaceState) => state.spaces);

// export const getSpaces = createSelector(spaceState, fromSpace.getSpaces);
