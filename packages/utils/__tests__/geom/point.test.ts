import { createSimple2D, createSimpleLine } from '../../src/geom';

describe('point geometry', () => {
  describe('createSimple2D', () => {
    it('should create point with correct coordinates', () => {
      const point = createSimple2D(1, 2);
      expect(point.x).toBe(1);
      expect(point.y).toBe(2);
    });

    it('should include tuple representation', () => {
      const point = createSimple2D(3, 4);
      expect(point.tuple).toEqual([3, 4]);
    });

    it('should handle negative coordinates', () => {
      const point = createSimple2D(-1, -2);
      expect(point.x).toBe(-1);
      expect(point.y).toBe(-2);
      expect(point.tuple).toEqual([-1, -2]);
    });

    it('should handle zero coordinates', () => {
      const point = createSimple2D(0, 0);
      expect(point.x).toBe(0);
      expect(point.y).toBe(0);
      expect(point.tuple).toEqual([0, 0]);
    });
  });

  describe('createSimpleLine', () => {
    it('should create line with correct start and end points', () => {
      const start = { x: 0, y: 0 };
      const end = { x: 1, y: 1 };
      const line = createSimpleLine(start, end);
      
      expect(line[0]).toEqual(start);
      expect(line[1]).toEqual(end);
    });

    it('should handle negative coordinates', () => {
      const start = { x: -1, y: -2 };
      const end = { x: -3, y: -4 };
      const line = createSimpleLine(start, end);
      
      expect(line[0]).toEqual(start);
      expect(line[1]).toEqual(end);
    });
  });
}); 