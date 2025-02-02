import { getRandomFloat } from '../../src/math/get-random-float';

describe('getRandomFloat', () => {
  it('should generate a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = getRandomFloat(min, max);
    
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should respect the precision parameter', () => {
    const result = getRandomFloat(1, 10, 3);
    const decimalPlaces = result.toString().split('.')[1]?.length || 0;
    
    expect(decimalPlaces).toBeLessThanOrEqual(3);
  });

  it('should work with negative numbers', () => {
    const min = -10;
    const max = -1;
    const result = getRandomFloat(min, max);
    
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
}); 