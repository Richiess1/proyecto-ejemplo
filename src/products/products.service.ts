import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getDiscountedPrice(price: number, discount: number): number {
    if (discount < 0 || discount >= 1) {
      throw new Error('Discount cannot be greater than or equal to 100%');
    }
    return price * (1 - discount);
  }

  getIVA(price: number): number {
    return price * 0.13;
  }
}
