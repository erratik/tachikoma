import { props, createAction } from '@ngrx/store';
import { Space } from '../../models';
import { SpaceConstants } from '../../space.constants';

export const selectSpace = createAction(`[Space] Selected Space`, props<{ current: Space }>());

export const fetchSpaces = createAction(
  `${SpaceConstants.fetchSpaceAction} Fetching Spaces`,
  props<{ spaces: Space[] }>()
);

export const fetchSpacesSuccess = createAction(`${SpaceConstants.fetchSpaceAction} Success`);
export const fetchSpacesFailure = createAction(`${SpaceConstants.fetchSpaceAction} Failure`, props<{ error: any }>());
// export const fetchSpaceRedirect = createAction(`${SpaceConstants.fetchSpaceAction} Redirect`);
