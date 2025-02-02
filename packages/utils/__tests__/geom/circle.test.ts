import { getSliceLengthOnCircle, getPointOnEllipse, calculateArcLength, getAngleFromArcLengthInDegrees } from '../../src/geom';

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

  describe('getPointOnEllipse', () => {
    it('should calculate correct points on a circle (equal radii)', () => {
      const radius = 5;
      
      // At 0 radians (right)
      expect(getPointOnEllipse(0, radius)).toEqual({ x: 5, y: 0 });
      
      // At π/2 radians (top)
      const topPoint = getPointOnEllipse(Math.PI / 2, radius);
      expect(topPoint.x).toBeCloseTo(0, 10);
      expect(topPoint.y).toBeCloseTo(5, 10);
      
      // At π radians (left)
      expect(getPointOnEllipse(Math.PI, radius)).toEqual({ 
        x: -5, 
        y: 0 
      });
    });

    it('should calculate correct points on an ellipse (different radii)', () => {
      const radiusX = 4;
      const radiusY = 2;
      
      // At 0 radians (right)
      expect(getPointOnEllipse(0, radiusX, radiusY)).toEqual({ 
        x: 4, 
        y: 0 
      });
      
      // At π/2 radians (top)
      const topPoint = getPointOnEllipse(Math.PI / 2, radiusX, radiusY);
      expect(topPoint.x).toBeCloseTo(0, 10);
      expect(topPoint.y).toBeCloseTo(2, 10);
    });

    it('should handle floating point angles', () => {
      const radius = 1;
      const angle = Math.PI / 4; // 45 degrees
      
      const result = getPointOnEllipse(angle, radius);
      // At 45 degrees, x and y should be approximately 0.707 (1/√2)
      expect(result.x).toBeCloseTo(0.707, 3);
      expect(result.y).toBeCloseTo(0.707, 3);
    });
  });

  describe('calculateArcLength', () => {
    it('should calculate correct arc length for various angles', () => {
      const radius = 5;
      
      // Full circle
      expect(calculateArcLength(radius, 360)).toBeCloseTo(2 * Math.PI * radius);
      
      // Half circle
      expect(calculateArcLength(radius, 180)).toBeCloseTo(Math.PI * radius);
      
      // Quarter circle
      expect(calculateArcLength(radius, 90)).toBeCloseTo(Math.PI * radius / 2);
    });

    it('should handle zero angle', () => {
      expect(calculateArcLength(5, 0)).toBe(0);
    });

    it('should handle angles greater than 360', () => {
      const radius = 5;
      expect(calculateArcLength(radius, 720)).toBeCloseTo(4 * Math.PI * radius);
    });
  });

  describe('getAngleFromArcLengthInDegrees', () => {
    const radius = 5;
    
    test('should correctly calculate common angles', () => {
      // Quarter circle
      expect(getAngleFromArcLengthInDegrees(calculateArcLength(radius, 90), radius))
        .toBeCloseTo(90);
      
      // Half circle
      expect(getAngleFromArcLengthInDegrees(calculateArcLength(radius, 180), radius))
        .toBeCloseTo(180);
      
      // Full circle
      expect(getAngleFromArcLengthInDegrees(calculateArcLength(radius, 360), radius))
        .toBeCloseTo(360);
    });

    test('should handle edge cases', () => {
      // Zero arc length
      expect(getAngleFromArcLengthInDegrees(0, radius)).toBe(0);
      
      // Small angle
      expect(getAngleFromArcLengthInDegrees(calculateArcLength(radius, 1), radius))
        .toBeCloseTo(1);
    });
  });
}); 