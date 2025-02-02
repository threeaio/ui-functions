import { remap } from '../../src/math';

describe('remap', () => {
  it('should remap a value from one range to another', () => {
    expect(remap(0, 100, 0, 1, 50)).toBe(0.5);
    expect(remap(0, 100, -100, 100, 75)).toBe(50);
  });

  it('should clamp values outside the original range', () => {
    expect(remap(0, 100, 0, 1, 150)).toBe(1);
    expect(remap(0, 100, 0, 1, -50)).toBe(0);
  });

  it('should handle reversed ranges', () => {
    expect(remap(0, 100, 1, 0, 50)).toBe(0.5);
    expect(remap(100, 0, 0, 1, 50)).toBe(0.5);
  });
}); 