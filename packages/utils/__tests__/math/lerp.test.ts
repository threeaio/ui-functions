import { lerp } from '../../src/math/lerp';

describe('lerp', () => {
  test('should return start value when t is 0', () => {
    expect(lerp(0, 1, 0)).toBe(0);
    expect(lerp(-10, 10, 0)).toBe(-10);
  });

  test('should return end value when t is 1', () => {
    expect(lerp(0, 1, 1)).toBe(1);
    expect(lerp(-10, 10, 1)).toBe(10);
  });

  test('should return midpoint when t is 0.5', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
    expect(lerp(-10, 10, 0.5)).toBe(0);
  });

  test('should work with values outside [0,1]', () => {
    expect(lerp(0, 10, 2)).toBe(20);
    expect(lerp(0, 10, -1)).toBe(-10);
  });
}); 