import { createAction, props } from '@ngrx/store';

export const pagePrefix = '[View Space Page]';

export const selectSpace = createAction(`${pagePrefix} Select Space`, props<{ id: string }>());

export const deselectSpace = createAction(`${pagePrefix} De-select Space`, props<{ id: string }>());
