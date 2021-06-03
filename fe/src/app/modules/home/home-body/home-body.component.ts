import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromHome, fromHomeActions, fromHomeSelectors } from '../store';
import { Product } from './../../../models/product';

@Component({
  selector: 'cs-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit(): void {
    this.store.dispatch(fromHomeActions.loadProducts());
    this.listenProducts();
  }

  onSelectProduct(product: Product) {
    console.log('product selected', product);
    this.store.dispatch(fromHomeActions.setCurrentProduct({ product }));
  }

  onShowIngredients(product: Product) {
    this.store.dispatch(fromHomeActions.showIngredients({ product }));
  }

  private listenProducts() {
    this.products$ = this.store.select(fromHomeSelectors.selectProducts);
  }

}
