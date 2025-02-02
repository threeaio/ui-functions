import { toDegrees, toRadians } from '../../src/math/angle-conversion';

describe('angle conversion', () => {
  describe('toDegrees', () => {
    it('should convert common angles correctly', () => {
      expect(toDegrees(Math.PI)).toBe(180);
      expect(toDegrees(Math.PI / 2)).toBe(90);
      expect(toDegrees(Math.PI / 4)).toBe(45);
      expect(toDegrees(0)).toBe(0);
    });

    it('should handle negative angles', () => {
      expect(toDegrees(-Math.PI)).toBe(-180);
      expect(toDegrees(-Math.PI / 2)).toBe(-90);
    });
  });

  describe('toRadians', () => {
    it('should convert common angles correctly', () => {
      expect(toRadians(180)).toBe(Math.PI);
      expect(toRadians(90)).toBe(Math.PI / 2);
      expect(toRadians(45)).toBe(Math.PI / 4);
      expect(toRadians(0)).toBe(0);
    });

    it('should handle negative angles', () => {
      expect(toRadians(-180)).toBe(-Math.PI);
      expect(toRadians(-90)).toBe(-Math.PI / 2);
    });
  });
}); 