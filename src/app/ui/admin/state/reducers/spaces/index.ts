import { createSelector, createFeatureSelector, combineReducers, Action } from '@ngrx/store';
import * as fromSearch from '@admin-reducers/spaces/search.reducer';
import * as fromSpaces from '@admin-reducers/spaces/spaces.reducer';
import * as fromRoot from '@reducers/.';
import { Space } from '@client/entities/spaces/models';

export const spacesFeatureKey = 'client';

export interface SpacesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromSpaces.spacesFeatureKey]: fromSpaces.State;
  // [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.State {
  [spacesFeatureKey]: SpacesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: SpacesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromSpaces.spacesFeatureKey]: fromSpaces.reducer
    // [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `spaces` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.spacesState$ = state$.pipe(select(getSpacesState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getSpacesState = createFeatureSelector<State, SpacesState>(spacesFeatureKey);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getSpaceEntitiesState = createSelector(getSpacesState, (state) => state.spaces);

export const getSelectedSpaceId = createSelector(getSpaceEntitiesState, fromSpaces.getSelectedId);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: getSpaceIds,
  selectEntities: getSpaceEntities,
  selectAll: getAllSpaces,
  selectTotal: getTotalSpaces
} = fromSpaces.adapter.getSelectors(getSpaceEntitiesState);

export const getSelectedSpace = createSelector(getSpaceEntities, getSelectedSpaceId, (entities, selectedId) => {
  return selectedId && entities[selectedId];
});

/**
 * Just like with the spaces selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getSearchState = createSelector(getSpacesState, (state: SpacesState) => state.search);

export const getSearchSpaceIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
export const getSearchError = createSelector(getSearchState, fromSearch.getError);

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of spaces in the store.
 */
export const getSearchResults = createSelector(getSpaceEntities, getSearchSpaceIds, (spaces, searchIds) => {
  return searchIds.map((id) => spaces[id]).filter((space): space is Space => space != null);
});

// export const getCollectionState = createSelector(
//   getSpacesState,
//   (state: SpacesState) => state.collection
// );

// export const getCollectionLoaded = createSelector(
//   getCollectionState,
//   fromCollection.getLoaded
// );
// export const getCollectionLoading = createSelector(
//   getCollectionState,
//   fromCollection.getLoading
// );
// export const getCollectionSpaceIds = createSelector(
//   getCollectionState,
//   fromCollection.getIds
// );

// export const getSpaceCollection = createSelector(
//   getSpaceEntities,
//   getCollectionSpaceIds,
//   (entities, ids) => {
//     return ids
//       .map(id => entities[id])
//       .filter((space): space is Space => space != null);
//   }
// );

// export const isSelectedSpaceInCollection = createSelector(
//   getCollectionSpaceIds,
//   getSelectedSpaceId,
//   (ids, selected) => {
//     return !!selected && ids.indexOf(selected) > -1;
//   }
// );
