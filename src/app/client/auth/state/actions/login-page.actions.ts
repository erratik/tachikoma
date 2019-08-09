import { createAction, props } from '@ngrx/store';
import { Credentials } from '@auth/models';

export const login = createAction('[Login Page]', props<{ credentials: Credentials }>());
