import { createAction, props } from '@ngrx/store';
import { Space } from '@client/entities/spaces/models';

export const searchSuccess = createAction('[Spaces/API] Search Success', props<{ spaces: Space[] }>());

export const searchFailure = createAction('[Spaces/API] Search Failure', props<{ errorMsg: string }>());
