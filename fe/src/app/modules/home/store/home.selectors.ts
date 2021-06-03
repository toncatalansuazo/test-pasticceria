import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from './home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.State>(
  fromHome.homeFeatureKey
);

export const selectProducts = createSelector(
  selectHomeState,
  state => state.products
);

export const selectCurrentProduct = createSelector(
  selectHomeState,
  state => state.currentProduct
);
