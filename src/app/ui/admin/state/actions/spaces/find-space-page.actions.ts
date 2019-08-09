import { createAction, props } from '@ngrx/store';

export const searchSpaces = createAction('[Find Space Page] Search Spaces', props<{ query: string }>());
