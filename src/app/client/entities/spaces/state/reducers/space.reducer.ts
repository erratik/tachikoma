import { createReducer, on } from '@ngrx/store';
import { SpaceApiActions } from '../../state/actions';
import { Space } from '../../models';

export const spacesFeatureKey = 'spaces';

export interface State {
  // current: Space | null;
  // selected: Space[] | [];
  spaces: Space[] | [];
}

export const initialState: State = {
  // current: null,
  // selected: null,
  spaces: null
};

export const reducer = createReducer(
  initialState,
  on(SpaceApiActions.storeSpaces, (state, { spaces }) => ({ ...state, spaces })),
  on(SpaceApiActions.loadSpacesFailure, () => initialState)
);

// export const getSpace = (state: State) => state.current;
export const getSpaces = (state: State) => state.spaces;
// export const getSelectedSpaces = (state: State) => state.selected;
