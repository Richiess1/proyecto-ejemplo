import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    service = new ProductsService();
  });

  describe('getDiscountedPrice', () => {
    it('should return correct discounted price', () => {
      const result = service.getDiscountedPrice(100, 0.2); // 20% descuento
      expect(result).toBe(80);
    });

    it('should throw error if discount is negative', () => {
      expect(() => {
        service.getDiscountedPrice(100, -0.1);
      }).toThrow('Discount cannot be greater than or equal to 100%');
    });

    it('should throw error if discount is 1 or more', () => {
      expect(() => {
        service.getDiscountedPrice(100, 1);
      }).toThrow('Discount cannot be greater than or equal to 100%');
    });
  });

  describe('getIVA', () => {
    it('should return 13% IVA of price', () => {
      const result = service.getIVA(100);
      expect(result).toBeCloseTo(13);
    });
  });
});

