import { createAction, props } from '@ngrx/store';
import { Space } from '../../models';
import { ActionPrefix, Entity } from '../../space.constants';

export const initializeSpaces = createAction(`🔁 [Initialize ${Entity.name} Data]`);
export const loadSpaces = createAction(`${ActionPrefix.load}`, props<{ spaces: Space[] }>());

export const loadSpacesSuccess = createAction(`✅${ActionPrefix.load}`);

export const loadSpacesFailure = createAction(`${ActionPrefix.load} Failure`, props<{ error: any }>());

export const storeSpaces = createAction(`${ActionPrefix.fetch} Storing Spaces`, props<{ spaces: Space[] }>());
