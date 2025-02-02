import { createArrayFromLength, insertInArray, moveInArray } from '../../src/structures/array';

describe('array utilities', () => {
  describe('createArrayFromLength', () => {
    it('should create array with correct length and values', () => {
      expect(createArrayFromLength(3)).toEqual([0, 1, 2]);
      expect(createArrayFromLength(1)).toEqual([0]);
      expect(createArrayFromLength(0)).toEqual([]);
    });

    it('should throw error for negative length', () => {
      expect(() => createArrayFromLength(-1)).toThrow('Length cannot be negative');
    });
  });

  describe('insertInArray', () => {
    it('should insert element at specified index', () => {
      expect(insertInArray([1, 2, 3], 4, 1)).toEqual([1, 4, 2, 3]);
      expect(insertInArray([1, 2], 3, 0)).toEqual([3, 1, 2]);
      expect(insertInArray([1, 2], 3, 2)).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(insertInArray([], 1, 0)).toEqual([1]);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => insertInArray(null as any, 1, 0))
        .toThrow('Array cannot be null or undefined');
      
      expect(() => insertInArray([1, 2], 3, -1))
        .toThrow('Insert index out of bounds');
      
      expect(() => insertInArray([1, 2], 3, 3))
        .toThrow('Insert index out of bounds');
    });
  });

  describe('moveInArray', () => {
    it('should move element to new position', () => {
      expect(moveInArray([1, 2, 3, 4], 0, 2)).toEqual([2, 3, 1, 4]);
      expect(moveInArray([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
      expect(moveInArray([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => moveInArray(null as any, 0, 1))
        .toThrow('Array cannot be null or undefined');
      
      expect(() => moveInArray([1, 2], -1, 1))
        .toThrow('Index out of bounds');
      
      expect(() => moveInArray([1, 2], 0, 2))
        .toThrow('Index out of bounds');
      
      expect(() => moveInArray([1, 2], 2, 0))
        .toThrow('Index out of bounds');
    });

    it('should handle edge cases', () => {
      // Moving first element to last position
      expect(moveInArray([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
      
      // Moving last element to first position
      expect(moveInArray([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
      
      // Moving element to same position
      expect(moveInArray([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
    });
  });
}); 