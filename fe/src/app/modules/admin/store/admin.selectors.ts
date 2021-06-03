import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from './admin.reducer';

export const selectAdminState = createFeatureSelector<fromAdmin.State>(
  fromAdmin.adminFeatureKey
);

export const getCurrentProduct = createSelector(selectAdminState, state => state.currentProduct);
export const getProducts = createSelector(selectAdminState, state => state.products);
export const getIngredients = createSelector(selectAdminState, state => state.ingredients);
export const getCurrentIngredient = createSelector(selectAdminState, state => state.currentIngredient);
