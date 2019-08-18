import { createAction, props } from '@ngrx/store';
import { Space } from '../../../../../core/models';
import { ActionPrefix, Entity } from '../../../../../core/constants/space.constants';

export const initializeSpaces = createAction(`🔁 Initialized spaces for application`);
export const loadSpaces = createAction(`${ActionPrefix.load}`, props<{ spaces: Space[] }>());

export const loadSpacesSuccess = createAction(`✅${ActionPrefix.load}`);

export const loadSpacesFailure = createAction(`😵 ${ActionPrefix.load} Failure`, props<{ error: any }>());
