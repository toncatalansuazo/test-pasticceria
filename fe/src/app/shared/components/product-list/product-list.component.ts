import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'cs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[];
  @Output()
  selectProduct: EventEmitter<Product> = new EventEmitter();
  @Output()
  showIngredients: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShowIngredients(product: Product) {
    console.log({product});
    this.showIngredients.emit(product);
  }

  onSelectProduct(product: Product) {
    console.log({product});
    this.selectProduct.emit(product);
  }

}
