import { reMap } from '../../src/math';

describe('reMap', () => {
  it('should remap a value from one range to another', () => {
    expect(reMap(0, 100, 0, 1, 50)).toBe(0.5);
    expect(reMap(0, 100, -100, 100, 75)).toBe(50);
  });

  it('should clamp values outside the original range', () => {
    expect(reMap(0, 100, 0, 1, 150)).toBe(1);
    expect(reMap(0, 100, 0, 1, -50)).toBe(0);
  });

  it('should handle reversed ranges', () => {
    expect(reMap(0, 100, 1, 0, 50)).toBe(0.5);
    expect(reMap(100, 0, 0, 1, 50)).toBe(0.5);
  });
}); 