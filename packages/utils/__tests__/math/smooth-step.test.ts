import { smoothStep } from '../../src/math/smooth-step';

describe('smoothStep', () => {
  it('should return correct values at boundaries', () => {
    expect(smoothStep(0)).toBe(0);
    expect(smoothStep(1)).toBe(1);
  });

  it('should return 0.5 at x = 0.5', () => {
    expect(smoothStep(0.5)).toBe(0.5);
  });

  it('should return smooth interpolation values', () => {
    expect(smoothStep(0.25)).toBeCloseTo(0.15625);
    expect(smoothStep(0.75)).toBeCloseTo(0.84375);
  });

  it('should throw error for values outside [0,1]', () => {
    expect(() => smoothStep(-0.1)).toThrow('Input x must be between 0 and 1');
    expect(() => smoothStep(1.1)).toThrow('Input x must be between 0 and 1');
  });
}); 