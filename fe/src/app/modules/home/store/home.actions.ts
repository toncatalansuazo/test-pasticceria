import { Product } from './../../../models/product';
import { createAction, props } from '@ngrx/store';

export const loadHomes = createAction(
  '[Home] Load Homes'
);

export const loadHomesSuccess = createAction(
  '[Home] Load Homes Success',
  props<{ data: any }>()
);

export const loadHomesFailure = createAction(
  '[Home] Load Homes Failure',
  props<{ error: any }>()
);

export const loadProducts = createAction(
  '[Home] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Home] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Home] Load Homes Failure',
  props<{ error: any }>()
);

export const setCurrentProduct = createAction(
  '[Home] Set Current Product',
  props<{ product: Product }>()
);

export const showIngredients = createAction(
  '[Home] Show Ingredients',
  props<{ product: Product }>()
);
