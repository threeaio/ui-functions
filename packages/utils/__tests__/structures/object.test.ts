import { getObjectKeys } from '../../src/structures/object';

describe('object utilities', () => {
  describe('getObjectKeys', () => {
    it('should return array of object keys with type safety', () => {
      const obj = { a: 1, b: 'string', c: true };
      const keys = getObjectKeys(obj);
      expect(keys).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty objects', () => {
      const obj = {};
      expect(getObjectKeys(obj)).toEqual([]);
    });

    it('should throw error for null/undefined', () => {
      expect(() => getObjectKeys(null as any))
        .toThrow('Object cannot be null or undefined');
      
      expect(() => getObjectKeys(undefined as any))
        .toThrow('Object cannot be null or undefined');
    });

    it('should handle objects with symbol keys', () => {
      const sym = Symbol('test');
      const obj = { [sym]: 'value' };
      expect(getObjectKeys(obj)).toEqual([]);
    });

    it('should handle nested objects', () => {
      const obj = {
        a: { nested: true },
        b: { another: 1 }
      };
      expect(getObjectKeys(obj)).toEqual(['a', 'b']);
    });
  });
}); 