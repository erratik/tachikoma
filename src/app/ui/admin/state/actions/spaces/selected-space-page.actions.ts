import { createAction, props } from '@ngrx/store';
import { Space } from '@client/entities/spaces/models';

/**
 * Add Space to Selection Action
 */
export const addSpace = createAction('[Selected Space Page] Add Space', props<{ space: Space }>());

/**
 * Remove Space from Selection Action
 */
export const removeSpace = createAction('[Selected Space Page] Remove Space', props<{ space: Space }>());
