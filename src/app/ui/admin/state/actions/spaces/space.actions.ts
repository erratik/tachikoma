import { createAction, props } from '@ngrx/store';
import { Space } from '@shared/models';
import { ActionPrefix, Entity } from '../../../../../core/constants/space.constants';

export const loadSpace = createAction(`🎬 Loaded selected space`, props<{ space: Space }>());

export const loadSpaceSuccess = createAction('✔️ Loaded space successfully');

export const loadSpaceFailure = createAction('🎬 Failure Loading Space', props<{ error: any }>());

export const selectSpace = createAction(`🕹️ Selected one space`, props<{ id: string }>());

// export const deselectSpace = createAction(`${pagePrefix} De-select Space`, props<{ id: string }>());

export const storeSpaces = createAction(`🗃️ Stored spaces`, props<{ spaces: Space[] }>());

export const editSpace = createAction(`🎬 Start edit space`, props<{ space: string }>());

export const editSpaceLoaded = createAction('✍️ Start edititng your space!');
