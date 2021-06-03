import { createReducer, on } from '@ngrx/store';
import { Ingredient, Product } from 'src/app/models/product';
import * as fromAdminActions from './admin.actions';

export const adminFeatureKey = 'admin';

export interface State {
  products: Product[];
  ingredients: Ingredient[];
  currentProduct: Product | undefined;
  currentIngredient: Ingredient | undefined;
}

export const initialState: State = {
  products: [],
  currentProduct: undefined,
  ingredients: [],
  currentIngredient: undefined,
};

export const reducer = createReducer(
  initialState,
  on(fromAdminActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.products
  })),
  on(fromAdminActions.saveProductSuccess, (state, action) => ({
    ...state,
    products: [...state.products, action.product]
  })),
  on(fromAdminActions.setCurrentProduct, (state, action) => ({
    ...state,
    currentProduct: action.product
  })),
  on(fromAdminActions.setCurrentIngredient, (state, action) => ({
    ...state,
    currentIngredient: action.ingredient
  })),
  on(fromAdminActions.loadIngredientsSuccess, (state, action) => ({
    ...state,
    ingredients: action.ingredients
  })),
  on(fromAdminActions.updateProductSuccess, (state, action) => ({
    ...state,
    products: state.products.map(prod => {
      if (prod.id === action.product.id) {
        return action.product;
      }
      return prod;
    })
  })),
  on(fromAdminActions.deleteProductSuccess, (state, action) => {
    const products: Product[] = JSON.parse(JSON.stringify(state.products));
    const index = products.findIndex((prod: Product) => prod.id === action.productId);
    products.splice(index, 1);
    return {
      ...state,
      products
    }
  }),
  on(fromAdminActions.deleteIngredientSuccess, (state, action) => {
    const ingredients: Ingredient[] = JSON.parse(JSON.stringify(state.ingredients));
    const index = ingredients.findIndex((prod: Ingredient) => prod.id === action.ingredientId);
    ingredients.splice(index, 1);
    return {
      ...state,
      ingredients
    }
  }),

);
