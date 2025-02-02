import { normalize } from '../../src/math/normalize';

describe('normalize', () => {
  it('should normalize a value between min and max to range 0-1', () => {
    expect(normalize(0, 100, 50)).toBe(0.5);
    expect(normalize(0, 100, 0)).toBe(0);
    expect(normalize(0, 100, 100)).toBe(1);
  });

  it('should handle negative ranges', () => {
    expect(normalize(-100, 100, 0)).toBe(0.5);
    expect(normalize(-50, 50, -25)).toBe(0.25);
  });

  it('should handle decimal values', () => {
    expect(normalize(0, 1, 0.5)).toBe(0.5);
    expect(normalize(0.5, 1.5, 1)).toBe(0.5);
  });

  it('should return 0.5 when min equals max to avoid division by zero', () => {
    expect(normalize(10, 10, 10)).toBe(0.5);
  });

  it('should handle values outside the range', () => {
    expect(normalize(0, 100, 150)).toBe(1.5);
    expect(normalize(0, 100, -50)).toBe(-0.5);
  });
}); 