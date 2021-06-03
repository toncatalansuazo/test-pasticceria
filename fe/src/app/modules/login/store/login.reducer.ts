import { Action, createReducer, on } from '@ngrx/store';
import { fromLoginActions } from "./index";

export const loginFeatureKey = 'login';

export interface State {
  authenticated: boolean

}

export const initialState: State = {
  authenticated: false
};


export const reducer = createReducer(
  initialState,
  on(fromLoginActions.loginSuccess, (state, action) => (
    {...state, authenticated: true}
  )),
  on(fromLoginActions.loginFailure, (state, action) => (
    {...state, authenticated: false}
  ))
);

