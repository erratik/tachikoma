import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  Action,
  combineReducers,
  ActionReducerMap
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromLayout from '@shared/state/reducers/layout.reducer';
import * as fromSpace from '@shared/state/reducers/spaces/space.reducer';
import * as fromSettings from '@shared/state/reducers/spaces/settings.reducer';

import * as fromSettingsPage from '@shared/state/reducers/pages/settings-page.reducer';
import * as fromSpacePage from '@shared/state/reducers/pages/space-page.reducer';

import * as fromPages from '@shared/state/reducers/pages/';
// import * as fromSpaces from '@shared/state/reducers/spaces/spaces.reducer';

import { InjectionToken } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  [fromSpace.spacesFeatureKey]: fromSpace.State;
  [fromSettings.settingsFeatureKey]: fromSettings.State;
  [fromPages.pagesFeatureKey]?: fromPages.PagesState;
  router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromPages.pagesFeatureKey]: fromPages.reducers,
    [fromSpace.spacesFeatureKey]: fromSpace.reducer,
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    [fromSettings.settingsFeatureKey]: fromSettings.reducer,
    router: fromRouter.routerReducer
  })
});

// [fromPages.pagesFeatureKey]: fromPages.reducers,
// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [ logger ] : [];

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<State, fromLayout.State>('layout');

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

/**
 * Space Reducers
 */
export const getSpaceState = createFeatureSelector<State, fromSpace.State>('spaces');

export const getSpaces = createSelector(getSpaceState, fromSpace.getSpaces);

export const getSelectedSpace = createSelector(getSpaceState, fromSpace.getSelectedSpace);

/**
 * Settings Reducers
 */
export const getSettingsState = createFeatureSelector<State, fromSettings.State>('settings');

export const getSettings = createSelector(getSettingsState, fromSettings.getSelectedSettings);
