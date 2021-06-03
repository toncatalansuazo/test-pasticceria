import { Ingredient, Product } from 'src/app/models/product';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Admin] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Admin] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Admin] Load Products Failure',
  props<{ error: any }>()
);

export const loadIngredients = createAction(
  '[Admin] Load Ingredients'
);

export const loadIngredientsSuccess = createAction(
  '[Admin] Load Ingredients Success',
  props<{ ingredients: Ingredient[] }>()
);

export const loadIngredientsFailure = createAction(
  '[Admin] Load Ingredients Failure',
  props<{ error: any }>()
);
export const setCurrentProduct = createAction(
  '[Admin] Set Current Product',
  props<{ product: Product }>()
);
export const deleteProduct = createAction(
  '[Admin] Delete Product',
  props<{ productId: number }>()
);
export const deleteProductSuccess = createAction(
  '[Admin] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Admin] Delete Product Failure',
  props<{ error: any }>()
);
export const setCurrentIngredient = createAction(
  '[Admin] Set Current Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const updateProduct = createAction(
  '[Admin] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Admin] update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Admin] Save Product Failure',
  props<{ error: any }>()
);
export const saveProduct = createAction(
  '[Admin] Save Product',
  props<{ product: Product }>()
);
export const saveProductSuccess = createAction(
  '[Admin] Save Product Success',
  props<{ product: Product }>()
);

export const saveProductFailure = createAction(
  '[Admin] Save Product Failure',
  props<{ error: any }>()
);
export const saveIngredient = createAction(
  '[Admin] Save Ingredient',
  props<{ ingredient: Ingredient }>()
);
export const saveIngredientsSuccess = createAction(
  '[Admin] Save Ingredients Success',
  props<{ ingredient: Ingredient }>()
);

export const saveIngredientsFailure = createAction(
  '[Admin] Save Ingredients Failure',
  props<{ error: any }>()
);

export const updateIngredient = createAction(
  '[Admin] Update ingredient',
  props<{ ingredient: Ingredient }>()
);
export const updateIngredientSuccess = createAction(
  '[Admin] Update ingredient Success',
  props<{ ingredient: Ingredient }>()
);

export const updateIngredientFailure = createAction(
  '[Admin] Update ingredient Failure',
  props<{ error: any }>()
);

export const deleteIngredient = createAction(
  '[Admin] Delete Ingredient',
  props<{ ingredientId: number }>()
);
export const deleteIngredientSuccess = createAction(
  '[Admin] Delete Ingredient Success',
  props<{ ingredientId: number }>()
);

export const deleteIngredientFailure = createAction(
  '[Admin] Delete Ingredient Failure',
  props<{ error: any }>()
);



