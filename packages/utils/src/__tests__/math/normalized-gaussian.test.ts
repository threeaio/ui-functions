import { normalizedGaussian } from '../../math/normalized-gaussian';

describe('normalizedGaussian', () => {
  it('should return strength at x=0', () => {
    expect(normalizedGaussian(0, 1)).toBe(1);
    expect(normalizedGaussian(0, 2)).toBe(2);
  });

  it('should approach 0 as x approaches 1', () => {
    expect(normalizedGaussian(1, 1)).toBeLessThan(0.01);
  });

  it('should be symmetric around x=0', () => {
    const strength = 1;
    const x = 0.3;
    expect(normalizedGaussian(-x, strength)).toBeCloseTo(normalizedGaussian(x, strength));
  });
}); 