import { clampToUnit } from '../../src/math/clamp-to-unit';

describe('clampToUnit', () => {
  test('should return same value for numbers between 0 and 1', () => {
    expect(clampToUnit(0)).toBe(0);
    expect(clampToUnit(0.5)).toBe(0.5);
    expect(clampToUnit(1)).toBe(1);
  });

  test('should clamp values above 1 to 1', () => {
    expect(clampToUnit(1.5)).toBe(1);
    expect(clampToUnit(100)).toBe(1);
  });

  test('should clamp values below 0 to 0', () => {
    expect(clampToUnit(-0.5)).toBe(0);
    expect(clampToUnit(-100)).toBe(0);
  });
}); 