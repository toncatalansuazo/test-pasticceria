import { Product } from './../../../models/product';
import { ProductService } from '../../../core/http/product/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as HomeActions from './home.actions';
import { fromUiActions } from 'src/app/shared/store';
import { Sidebars } from 'src/app/models/sidebars';



@Injectable()
export class HomeEffects {

  openSideBar$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.showIngredients),
      map(
        () => fromUiActions.openSidebar({id: Sidebars.AdminSideBarRight})
      )
    );
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadProducts),
      switchMap(() =>
        this.productService.loadProducts().pipe(
          map((products: Product[]) => HomeActions.loadProductsSuccess({ products })),
          catchError(error => of(HomeActions.loadProductsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
    private productService: ProductService) {}

}
