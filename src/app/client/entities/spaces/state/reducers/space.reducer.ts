import { createReducer, on } from '@ngrx/store';
import { SpaceActions } from '../../state/actions';
import { Space } from '../../models';

export const spacesFeatureKey = 'space';

export interface State {
  current: Space | null;
  selected: Space[] | [];
  spaces: Space[] | [];
}

export const initialState: State = {
  current: null,
  selected: null,
  spaces: null
};

export const reducer = createReducer(
  initialState,
  on(SpaceActions.fetchSpaces, (state, { spaces }) => ({ ...state, spaces })),
  on(SpaceActions.selectSpace, (state, { current }) => ({ ...state, current })),
  on(SpaceActions.fetchSpacesFailure, () => initialState)
);

export const getSpace = (state: State) => state.current;
export const getSpaces = (state: State) => state.spaces;
export const getSelectedSpaces = (state: State) => state.selected;
