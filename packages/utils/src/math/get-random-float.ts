/**
 * Generates a random float within a range.
 * @param min Minimum value.
 * @param max Maximum value.
 * @param precision Decimal precision (defaults to 2).
 * @returns Random float within the range.
 */
export const getRandomFloat = (min: number, max: number, precision = 2): number => {
  const random = Math.random() * (max - min) + min;
  return Number(random.toFixed(precision));
}; 