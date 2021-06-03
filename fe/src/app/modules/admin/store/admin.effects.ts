import { loadProductsSuccess } from './../../home/store/home.actions';
import { ProductService } from '../../../core/http/product/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AdminActions from './admin.actions';
import { IngredientService } from 'src/app/core/http/ingredient/ingredient.service';
import { Ingredient, Product } from 'src/app/models/product';
import { fromUiActions } from 'src/app/shared/store';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable()
export class AdminEffects {


  loadAdmins$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.loadProducts),
      switchMap(() =>
        this.productService.loadProducts().pipe(
          map(products => AdminActions.loadProductsSuccess({ products })),
          catchError(error => of(AdminActions.loadProductsFailure({ error }))))
      )
    );
  });

  loadIngredients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.loadIngredients),
      switchMap(() =>
        this.ingredientService.loadIngredients().pipe(
          map(ingredients => AdminActions.loadIngredientsSuccess({ ingredients })),
          catchError(error => of(AdminActions.loadIngredientsFailure({ error }))))
      )
    );
  });

  saveProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.saveProduct),
      switchMap(({product}) =>
        this.productService.saveProduct(product).pipe(
          map((product: Product) => AdminActions.saveProductSuccess({ product })),
          catchError(error => of(AdminActions.saveProductFailure({ error }))))
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.updateProduct),
      switchMap(({product}) =>
        this.productService.updateProduct(product).pipe(
          map((product: Product) => AdminActions.updateProductSuccess({ product })),
          catchError(error => of(AdminActions.updateProductFailure({ error }))))
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.deleteProduct),
      switchMap(({productId}) =>
        this.productService.deleteProduct(productId).pipe(
          map(ingredients => AdminActions.deleteProductSuccess({ productId })),
          catchError(error => of(AdminActions.deleteProductFailure({ error }))))
      )
    );
  });

  showSnack$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AdminActions.saveProductSuccess,
        AdminActions.deleteProductSuccess,
        AdminActions.updateProductSuccess
      ),
      map(() =>
        this.snackBar.open('Product created/updated/deleted!', 'ok', {duration: 5000})
      )
    );
  }, {dispatch: false});

  showSnackIngredient$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AdminActions.saveIngredientsSuccess,
        AdminActions.deleteIngredientSuccess,
        AdminActions.updateIngredientSuccess
      ),
      map(() =>
        this.snackBar.open('Ingredient created/updated/deleted!', 'ok', {duration: 5000})
      )
    );
  }, {dispatch: false});

  saveIngredients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.saveIngredient),
      switchMap(({ingredient}) =>
        this.ingredientService.saveIngredient(ingredient).pipe(
          map(ingredient => AdminActions.saveIngredientsSuccess({ ingredient })),
          catchError(error => of(AdminActions.saveIngredientsFailure({ error }))))
      )
    );
  });

  updateIngredient$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.updateIngredient),
      switchMap(({ingredient}) =>
        this.ingredientService.updateIngredient(ingredient).pipe(
          map((ingredient: Ingredient) => AdminActions.updateIngredientSuccess({ ingredient })),
          catchError(error => of(AdminActions.updateIngredientFailure({ error }))))
      )
    );
  });

  deleteIngredient$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.deleteIngredient),
      switchMap(({ingredientId}) =>
        this.ingredientService.deleteIngredient(ingredientId).pipe(
          map((ingredient: Ingredient) => AdminActions.deleteIngredientSuccess({ ingredientId })),
          catchError(error => of(AdminActions.deleteIngredientFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private ingredientService: IngredientService,
    private snackBar: MatSnackBar
  ) {}

}
