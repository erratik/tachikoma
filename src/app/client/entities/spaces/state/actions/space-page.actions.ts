import { createAction, props } from '@ngrx/store';
import { Space } from '../../models';
import { SpaceConstants } from '../../space.constants';

export const loadSpacePage = createAction('[Space Page]');
export const loadSpaces = createAction('[Space Page] Loading Spaces...', props<{ spaces: Space[] }>());

export const loadSpacesSuccess = createAction(`${SpaceConstants.loadSpaceAction} Success`);

export const loadSpacesFailure = createAction(`${SpaceConstants.loadSpaceAction} Success`, props<{ error: any }>());
