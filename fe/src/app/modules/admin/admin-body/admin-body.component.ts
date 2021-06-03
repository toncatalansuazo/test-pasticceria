import { setCurrentProduct } from './../../home/store/home.actions';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromAdmin, fromAdminActions, fromAdminSelectors } from '../store';

@Component({
  selector: 'cs-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.scss']
})
export class AdminBodyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'edit', 'delete'];
  products$: Observable<Product[]>;

  constructor(private store: Store<fromAdmin.State>) { }

  ngOnInit(): void {
    this.loadProducts();
    this.listenProducts();
  }

  onSelectProduct($event: Product) {
    this.store.dispatch(fromAdminActions.setCurrentProduct({ product: $event}));
  }

  private loadProducts() {
    this.store.dispatch(fromAdminActions.loadProducts());
  }

  private listenProducts() {
    this.products$ = this.store.select(fromAdminSelectors.getProducts);
  }

}
