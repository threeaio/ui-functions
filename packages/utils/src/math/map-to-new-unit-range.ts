/**
 * maps a normalized value within a specified range [min, max] to a constrained value between 0 and 1.
 * @param min Minimum boundary of the range (must be between 0 and 1).
 * @param max Maximum boundary of the range (must be between 0 and 1).
 * @param value The input value (between 0 and 1) to normalize within the new range.
 * @returns A normalized value between 0 and 1.
 */
export const mapToNewUnitRange = (
  min: number,
  max: number,
  value: number,
): number => {
  if (max > 1 || max < 0 || min > 1 || min < 0)
    throw new RangeError("Range values must be between 0 and 1");
  if (max - min === 0)
    throw new RangeError(
      `Range must be greater than 0. Given was max: ${max} and min: ${min}`,
    );
  const normalizedValue = (value - min) / (max - min);
  return Math.min(Math.max(normalizedValue, 0), 1);
}; 