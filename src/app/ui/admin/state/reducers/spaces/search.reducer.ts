import { FindSpacePageActions } from '@admin-actions/.';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface State {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  error: '',
  query: ''
};

export const reducer = createReducer(
  initialState,
  on(FindSpacePageActions.searchSpaces, (state, { query }) => {
    return query === ''
      ? {
          ids: [],
          loading: false,
          error: '',
          query
        }
      : {
          ...state,
          loading: true,
          error: '',
          query
        };
  })
  // on(SpacesApiActions.searchSuccess, (state, { spaces }) => ({
  //   ids: spaces.map((space) => space.id),
  //   loading: false,
  //   error: '',
  //   query: state.query
  // })),
  // on(SpacesApiActions.searchFailure, (state, { errorMsg }) => ({
  //   ...state,
  //   loading: false,
  //   error: errorMsg
  // }))
);

export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
