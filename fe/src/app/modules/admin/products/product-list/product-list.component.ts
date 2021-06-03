import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { fromAdmin, fromAdminActions, fromAdminSelectors } from '../../store';


@Component({
  selector: 'cs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'edit', 'delete'];
  products$: Observable<Product[]>;
  constructor(
    private store: Store<fromAdmin.State>,
    private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
    this.listenProducts();
  }



  onEdit(product: Product) {
    this.setCurrentProduct(product);
    this.router.navigate(['/admin/products/edit']);
  }

  onDelete(product: Product) {
    const productId: number = <number>product.id;
    this.store.dispatch(fromAdminActions.deleteProduct({ productId }));
  }

  setCurrentProduct($event: Product) {
    this.store.dispatch(fromAdminActions.setCurrentProduct({ product: $event}));
  }

  private loadProducts() {
    this.store.dispatch(fromAdminActions.loadProducts());
  }

  private listenProducts() {
    this.products$ = this.store.select(fromAdminSelectors.getProducts);
  }

}
