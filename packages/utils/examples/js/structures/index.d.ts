/**
 * Creates an array of numbers from 0 to length - 1.
 * @param length The length of the array
 * @returns Array of numbers
 */
declare const createArrayFromLength: (length: number) => number[];
/**
 * Inserts an element into an array at a specified index.
 * @param array Original array
 * @param newEl New element to insert
 * @param insertAtIndex Index to insert at
 * @returns New array with the element inserted
 */
declare const insertInArray: <T>(array: T[], newEl: T, insertAtIndex: number) => T[];
/**
 * Moves an element within an array from one index to another.
 * @param array The array to modify
 * @param from Index of the element to move
 * @param to New index of the element to move to
 * @returns New array with the element moved
 */
declare const moveInArray: <T>(array: T[], from: number, to: number) => T[];

/**
 * Gets the keys of an object with type safety.
 * @param obj Object to get keys from
 * @returns Array of keys
 */
declare const getObjectKeys: <T extends object>(obj: T) => Array<keyof T>;

export { createArrayFromLength, getObjectKeys, insertInArray, moveInArray };
