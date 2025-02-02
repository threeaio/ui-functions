import { getSliceLengthOnCircle, getPointOnEllipse } from '../../src/geom';

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
      expect(getPointOnEllipse(Math.PI / 2, radius)).toEqual({ 
        x: 0, 
        y: 5 
      });
      
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
      expect(getPointOnEllipse(Math.PI / 2, radiusX, radiusY)).toEqual({ 
        x: 0, 
        y: 2 
      });
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
}); 