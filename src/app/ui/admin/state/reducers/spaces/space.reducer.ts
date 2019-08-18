import { createReducer, on } from '@ngrx/store';
import { Space } from '../../../../../core/models';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { AdminSpaceActions, SpaceApiActions } from '@shared/state/actions/spaces';

export const spacesFeatureKey = 'spaces';

export interface State {
  // current: Space | null;
  spaces: Space[] | [];
  selectedSpace?: string | null;
}

export const initialState: State = {
  // current: null,
  spaces: null
};

export const reducer = createReducer(
  initialState,
  on(AdminSpaceActions.storeSpaces, (state, { spaces }) => ({ ...state, spaces })),
  on(SpaceApiActions.loadSpacesFailure, () => initialState),
  on(AdminSpaceActions.selectSpace, (state, { id }) => ({
    ...state,
    selectedSpace: id
  }))
);

// export const getSpace = (state: State) => state.current;
export const getSpaces = (state: State) => state.spaces;
export const getSelectedSpace = (state: State) => state.selectedSpace;
