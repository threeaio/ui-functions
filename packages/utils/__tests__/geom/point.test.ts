import { createSimple2D, createSimpleLine, lerpPoints } from '../../src/geom';

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

  describe('lerpPoints', () => {
    it('should interpolate between two points at t=0.5', () => {
      const start = { x: 0, y: 0 };
      const end = { x: 10, y: 10 };
      const result = lerpPoints(start, end, 0.5);
      
      expect(result.x).toBe(5);
      expect(result.y).toBe(5);
      expect(result.tuple).toEqual([5, 5]);
    });

    it('should return start point when t=0', () => {
      const start = { x: 1, y: 2 };
      const end = { x: 10, y: 20 };
      const result = lerpPoints(start, end, 0);
      
      expect(result.x).toBe(1);
      expect(result.y).toBe(2);
      expect(result.tuple).toEqual([1, 2]);
    });

    it('should return end point when t=1', () => {
      const start = { x: 1, y: 2 };
      const end = { x: 10, y: 20 };
      const result = lerpPoints(start, end, 1);
      
      expect(result.x).toBe(10);
      expect(result.y).toBe(20);
      expect(result.tuple).toEqual([10, 20]);
    });

    it('should handle negative coordinates', () => {
      const start = { x: -10, y: -10 };
      const end = { x: 10, y: 10 };
      const result = lerpPoints(start, end, 0.5);
      
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
      expect(result.tuple).toEqual([0, 0]);
    });

    it('should handle t values outside [0,1] range', () => {
      const start = { x: 0, y: 0 };
      const end = { x: 10, y: 10 };
      
      const beforeStart = lerpPoints(start, end, -0.5);
      expect(beforeStart.x).toBe(-5);
      expect(beforeStart.y).toBe(-5);
      
      const afterEnd = lerpPoints(start, end, 1.5);
      expect(afterEnd.x).toBe(15);
      expect(afterEnd.y).toBe(15);
    });
  });
}); 