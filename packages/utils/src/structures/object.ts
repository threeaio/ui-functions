/**
 * Gets the keys of an object with type safety.
 * @param obj Object to get keys from
 * @returns Array of keys
 */
export const getObjectKeys = <T extends object>(obj: T): Array<keyof T> => {
  if (!obj) throw new Error('Object cannot be null or undefined');
  return Object.keys(obj) as Array<keyof T>;
}; 