import { createAction, props } from '@ngrx/store';
import { Space } from '@entities/spaces/models';

export const loadSpace = createAction('[Space Exists Guard] Load Space', props<{ space: Space }>());

export const loadSpaceSuccess = createAction('[Space Exists Guard] Loaded Space Successfully', props<{ data: any }>());

export const loadSpaceFailure = createAction('[Space Exists Guard] Failure Loading Space', props<{ error: any }>());