import { getSliceLengthOnCircle } from '../../src/geom';

describe('circle geometry', () => {
  describe('getSliceLengthOnCircle', () => {
    it('should calculate correct slice length', () => {
      // At radius 5:
      // - height 5 (center) should give diameter (10)
      // - height 2.5 should give ~8.66 (using Pythagorean theorem)
      expect(getSliceLengthOnCircle(5, 5)).toBe(10);
      expect(getSliceLengthOnCircle(5, 2.5)).toBeCloseTo(8.66, 2);
    });

    it('should handle edge cases', () => {
      // At the edge (height 0), width should be 0
      expect(getSliceLengthOnCircle(5, 0)).toBe(0);
      // At the center (height = radius), width should be diameter
      expect(getSliceLengthOnCircle(10, 10)).toBe(20);
    });
  });
}); 