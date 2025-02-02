import { normalizeWithDeadZones } from '../../src/math/normalize-with-dead-zones';

describe('normalizeWithDeadZones', () => {
  it('should correctly normalize values between thresholds', () => {
    expect(normalizeWithDeadZones(0.3, 0.7, 0.5)).toBeCloseTo(0.5);
    expect(normalizeWithDeadZones(0.3, 0.7, 0.3)).toBe(0);
    expect(normalizeWithDeadZones(0.3, 0.7, 0.7)).toBe(1);
  });

  it('should clamp values outside thresholds', () => {
    expect(normalizeWithDeadZones(0.3, 0.7, 0.1)).toBe(0);
    expect(normalizeWithDeadZones(0.3, 0.7, 0.9)).toBe(1);
  });

  it('should handle edge cases', () => {
    expect(normalizeWithDeadZones(0, 1, 0.5)).toBe(0.5);
    expect(normalizeWithDeadZones(0.2, 0.8, 0.5)).toBeCloseTo(0.5);
  });

  it('should throw error for invalid thresholds', () => {
    expect(() => normalizeWithDeadZones(-0.1, 0.5, 0.3)).toThrow(RangeError);
    expect(() => normalizeWithDeadZones(0.2, 1.1, 0.3)).toThrow(RangeError);
    expect(() => normalizeWithDeadZones(0.7, 0.3, 0.5)).toThrow(RangeError);
    expect(() => normalizeWithDeadZones(0.5, 0.5, 0.5)).toThrow(RangeError);
  });
}); 