import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const login = createAction(
  '[Login] Login',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: any }>()
);
