import { remapUnit } from '../../src/math/remap-unit';

describe('remapUnit', () => {
  it('should remap a value within [0,1] to a new subrange', () => {
    const EPSILON = 1e-10; // Very small number for floating point comparison
    
    const result1 = remapUnit(0.2, 0.8, 0.5);
    expect(Math.abs(result1 - 0.5)).toBeLessThan(EPSILON);
    
    const result2 = remapUnit(0, 0.5, 0.25);
    expect(Math.abs(result2 - 0.5)).toBeLessThan(EPSILON);
  });

  it('should throw error if range values are outside [0,1]', () => {
    expect(() => remapUnit(1.2, 0.8, 0.5)).toThrow(RangeError);
    expect(() => remapUnit(-0.2, 0.8, 0.5)).toThrow(RangeError);
  });

  it('should throw error if range is zero', () => {
    expect(() => remapUnit(0.5, 0.5, 0.5)).toThrow(RangeError);
  });
}); 