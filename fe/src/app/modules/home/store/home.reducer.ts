import { Product } from './../../../models/product';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromHomeActions from './home.actions';

export const homeFeatureKey = 'home';


export interface State {
  products: Product[];
  currentProduct: Product | undefined;
}

export const initialState: State = {
  products: [],
  currentProduct: undefined
};


export const reducer = createReducer(
  initialState,

  on(fromHomeActions.loadHomes, state => state),
  on(fromHomeActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: [...state.products, ...action.products]
  })),
  on(fromHomeActions.loadProductsFailure, (state, action) => ({
    ...state,
    products: []
  })),
  on(fromHomeActions.setCurrentProduct, (state, action) => ({
    ...state,
    currentProduct: action.product
  }))
);

