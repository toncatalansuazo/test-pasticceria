import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromLogin } from './index';

export const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);

export const isAuthenticated = createSelector(selectLoginState, state => state.authenticated)
