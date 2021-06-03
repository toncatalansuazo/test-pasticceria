import { getDaysDiff } from './../../utils/date-utils';
import { Product } from './../../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPipe'
})
export class DiscountPipe implements PipeTransform {

  transform(product: Product): string {
    const productDate: Date = new Date(product.createdAt);
    const currentDate: Date = new Date();
    const daysDiff: number = getDaysDiff(productDate, currentDate);
    if (daysDiff === 1) {
      return '20%';
    }
    if (daysDiff === 2) {
      return '80%';
    }
    return '0';
  }

}
