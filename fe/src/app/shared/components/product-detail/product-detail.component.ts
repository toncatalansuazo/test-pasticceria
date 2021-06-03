import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'cs-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;
  @Output()
  showIngredients: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onShowIngredients(event: MouseEvent, product: Product) {
    event.preventDefault();
    this.showIngredients.emit(product);
  }

}
