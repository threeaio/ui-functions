import { linesIntersect, createSimpleLine, generateLinePoints } from '../../src/geom';

describe('line geometry', () => {
  describe('linesIntersect', () => {
    it('should detect intersecting lines', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 2, y: 2 });
      const line2 = createSimpleLine({ x: 0, y: 2 }, { x: 2, y: 0 });
      expect(linesIntersect(line1, line2)).toBe(true);
    });

    it('should detect non-intersecting lines', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 0 });
      const line2 = createSimpleLine({ x: 0, y: 1 }, { x: 1, y: 1 });
      expect(linesIntersect(line1, line2)).toBe(false);
    });

    it('should handle parallel lines', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 0 });
      const line2 = createSimpleLine({ x: 0, y: 1 }, { x: 1, y: 1 });
      expect(linesIntersect(line1, line2)).toBe(false);
    });

    it('should detect collinear overlapping lines', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 2, y: 0 });
      const line2 = createSimpleLine({ x: 1, y: 0 }, { x: 3, y: 0 });
      expect(linesIntersect(line1, line2)).toBe(true);
    });

    it('should handle lines sharing an endpoint', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = createSimpleLine({ x: 1, y: 1 }, { x: 2, y: 0 });
      expect(linesIntersect(line1, line2)).toBe(true);
    });

    it('should handle collinear non-overlapping lines', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 0 });
      const line2 = createSimpleLine({ x: 2, y: 0 }, { x: 3, y: 0 });
      expect(linesIntersect(line1, line2)).toBe(false);
    });

    it('should handle perpendicular lines not intersecting', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 0 });
      const line2 = createSimpleLine({ x: 2, y: -1 }, { x: 2, y: 1 });
      expect(linesIntersect(line1, line2)).toBe(false);
    });

    it('should handle lines intersecting at endpoints', () => {
      const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = createSimpleLine({ x: 0, y: 1 }, { x: 1, y: 1 });
      expect(linesIntersect(line1, line2)).toBe(true);
    });
  });

  describe('generateLinePoints', () => {
    it('should generate correct number of points', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(generateLinePoints(line, 3)).toHaveLength(3);
      expect(generateLinePoints(line, 0)).toHaveLength(0);
      expect(generateLinePoints(line, 1)).toHaveLength(1);
    });

    it('should generate evenly spaced points', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 10, y: 0 });
      const points = generateLinePoints(line, 4);
      
      // Points should be at x = 2, 4, 6, 8
      expect(points[0].x).toBeCloseTo(2);
      expect(points[1].x).toBeCloseTo(4);
      expect(points[2].x).toBeCloseTo(6);
      expect(points[3].x).toBeCloseTo(8);
    });

    it('should handle diagonal lines', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      const points = generateLinePoints(line, 1);
      
      // Single point should be at (0.5, 0.5)
      expect(points[0].x).toBeCloseTo(0.5);
      expect(points[0].y).toBeCloseTo(0.5);
    });

    it('should include tuple representation', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      const points = generateLinePoints(line, 1);
      
      expect(points[0].tuple).toEqual([points[0].x, points[0].y]);
    });

    it('should throw error for negative count', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(() => generateLinePoints(line, -1)).toThrow('Number of points must be non-negative');
    });

    it('should handle vertical lines', () => {
      const line = createSimpleLine({ x: 0, y: 0 }, { x: 0, y: 10 });
      const points = generateLinePoints(line, 4);
      
      // All points should have x = 0
      points.forEach(point => expect(point.x).toBe(0));
      
      // Y values should be evenly spaced
      expect(points[0].y).toBeCloseTo(2);
      expect(points[1].y).toBeCloseTo(4);
      expect(points[2].y).toBeCloseTo(6);
      expect(points[3].y).toBeCloseTo(8);
    });
  });
}); 