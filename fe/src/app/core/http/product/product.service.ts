import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Ingredient, Product } from '../../../models/product';
import { ConfigurationEndpoint } from '../../../configuration/configuration-endpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  loadProducts(): Observable<Product[]> {
    console.log('ConfigurationEndpoint.getProductsEndpoint()', ConfigurationEndpoint.getProductsEndpoint());
    return this.http.get<Product[]>(ConfigurationEndpoint.getProductsEndpoint());
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(ConfigurationEndpoint.getProductsEndpoint(), product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(ConfigurationEndpoint.getProductsEndpoint(), product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${ConfigurationEndpoint.getProductsEndpoint()}?id=${productId}`);
  }

  constructor(private http: HttpClient) {}
}
