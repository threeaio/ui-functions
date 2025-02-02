/**
 * Normalizes a value from the unit range [0,1] to a new unit range with "dead zones".
 * Values below 'threshold_low' are mapped to 0,
 * values above 'threshold_high' are mapped to 1,
 * values between thresholds are linearly mapped to [0,1].
 * 
 * @param threshold_low Lower threshold (must be between 0 and 1)
 * @param threshold_high Higher threshold (must be between 0 and 1)
 * @param value Input value between 0 and 1
 * @returns Normalized value between 0 and 1
 * @throws {RangeError} If thresholds are invalid or not in [0,1] range
 * 
 * @example
 * // With thresholds (0.3, 0.7):
 * // input 0.0 to 0.3 -> output 0 (dead zone)
 * // input 0.3 to 0.7 -> output 0 to 1 (linear mapping)
 * // input 0.7 to 1.0 -> output 1 (saturation)
 */
export const normalizeWithDeadZones = (
  threshold_low: number,
  threshold_high: number,
  value: number,
): number => {
  // Validate thresholds are in valid range
  if (threshold_high > 1 || threshold_high < 0 || threshold_low > 1 || threshold_low < 0) {
    throw new RangeError("Thresholds must be between 0 and 1");
  }

  // Validate threshold order
  if (threshold_high <= threshold_low) {
    throw new RangeError(
      `High threshold must be greater than low threshold. Given: low ${threshold_low}, high ${threshold_high}`,
    );
  }

  // Normalize value between thresholds to [0,1] range
  const normalizedValue = (value - threshold_low) / (threshold_high - threshold_low);
  
  // Clamp result to [0,1]
  return Math.min(Math.max(normalizedValue, 0), 1);
}; 