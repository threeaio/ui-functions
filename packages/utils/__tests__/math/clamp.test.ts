import { clamp } from '../../src/math/clamp';

describe('clamp', () => {
  it('should clamp values within the specified range', () => {
    expect(clamp(0, 100, 50)).toBe(50);  // value within range
    expect(clamp(0, 100, 0)).toBe(0);    // value at min
    expect(clamp(0, 100, 100)).toBe(100); // value at max
  });

  it('should clamp values that exceed the range', () => {
    expect(clamp(0, 100, 150)).toBe(100); // value above max
    expect(clamp(0, 100, -50)).toBe(0);   // value below min
  });

  it('should handle negative ranges', () => {
    expect(clamp(-100, 0, -50)).toBe(-50);
    expect(clamp(-100, 0, -150)).toBe(-100);
    expect(clamp(-100, 0, 50)).toBe(0);
  });

  it('should handle decimal values', () => {
    expect(clamp(0.5, 1.5, 1)).toBe(1);
    expect(clamp(0.5, 1.5, 0.3)).toBe(0.5);
    expect(clamp(0.5, 1.5, 1.7)).toBe(1.5);
  });

  it('should handle inverted range (rangeStart > rangeEnd)', () => {
    expect(clamp(100, 0, 50)).toBe(50);
    expect(clamp(100, 0, 150)).toBe(100);
    expect(clamp(100, 0, -50)).toBe(0);
  });

  it('should handle equal range bounds', () => {
    expect(clamp(50, 50, 100)).toBe(50);
    expect(clamp(50, 50, 0)).toBe(50);
    expect(clamp(50, 50, 50)).toBe(50);
  });
}); 