import { normalizedGaussian } from '../../src/math/normalized-gaussian';

describe('normalizedGaussian', () => {
  it('should return strength at x=0', () => {
    expect(normalizedGaussian(0, 1)).toBe(1);
    expect(normalizedGaussian(0, 2)).toBe(2);
    expect(normalizedGaussian(0, 0.5)).toBe(0.5);
  });

  it('should approach 0 as x approaches 1', () => {
    expect(normalizedGaussian(1, 1)).toBeLessThan(0.02);
    expect(normalizedGaussian(1, 2)).toBeLessThan(0.04);
  });

  it('should be symmetric around x=0', () => {
    const strength = 1;
    const testPoints = [0.1, 0.3, 0.5, 0.7, 0.9];
    
    testPoints.forEach(x => {
      expect(normalizedGaussian(-x, strength))
        .toBeCloseTo(normalizedGaussian(x, strength), 10);
    });
  });

  it('should follow gaussian decay pattern', () => {
    const strength = 1;
    // At x=0.5, value should be approximately 0.135
    expect(normalizedGaussian(0.5, strength)).toBeCloseTo(0.135, 3);
    
    // Value at x=0.25 should be higher than at x=0.5
    expect(normalizedGaussian(0.25, strength))
      .toBeGreaterThan(normalizedGaussian(0.5, strength));
    
    // Value at x=0.75 should be lower than at x=0.5
    expect(normalizedGaussian(0.75, strength))
      .toBeLessThan(normalizedGaussian(0.5, strength));
  });

  it('should scale output proportionally with strength', () => {
    const x = 0.5;
    const baseStrength = 1;
    const baseValue = normalizedGaussian(x, baseStrength);
    
    expect(normalizedGaussian(x, 2)).toBeCloseTo(baseValue * 2, 10);
    expect(normalizedGaussian(x, 0.5)).toBeCloseTo(baseValue * 0.5, 10);
  });
}); 