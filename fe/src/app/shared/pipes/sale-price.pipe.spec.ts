import { DiscountPipe } from './sale-price.pipe';

describe('SalePricePipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountPipe();
    expect(pipe).toBeTruthy();
  });
});
