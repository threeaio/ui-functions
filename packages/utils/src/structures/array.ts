/**
 * Creates an array of numbers from 0 to length - 1.
 * @param length The length of the array
 * @returns Array of numbers
 */
export const createArrayFromLength = (length: number): number[] => {
  if (length < 0) throw new Error('Length cannot be negative');
  return Array.from({ length }, (_, i) => i);
};

/**
 * Inserts an element into an array at a specified index.
 * @param array Original array
 * @param newEl New element to insert
 * @param insertAtIndex Index to insert at
 * @returns New array with the element inserted
 */
export const insertInArray = <T>(
  array: T[],
  newEl: T,
  insertAtIndex: number,
): T[] => {
  if (!array) throw new Error('Array cannot be null or undefined');
  if (insertAtIndex < 0 || insertAtIndex > array.length) {
    throw new Error('Insert index out of bounds');
  }
  
  return [
    ...array.slice(0, insertAtIndex),
    newEl,
    ...array.slice(insertAtIndex),
  ];
};

/**
 * Moves an element within an array from one index to another.
 * @param array The array to modify
 * @param from Index of the element to move
 * @param to New index of the element to move to
 * @returns New array with the element moved
 */
export const moveInArray = <T>(array: T[], from: number, to: number): T[] => {
  if (!array) throw new Error('Array cannot be null or undefined');
  if (from < 0 || from >= array.length || to < 0 || to >= array.length) {
    throw new Error('Index out of bounds');
  }
  
  const elm = array[from];
  const withoutElArray = [...array.slice(0, from), ...array.slice(from + 1)];
  return insertInArray(withoutElArray, elm, to);
}; 