/**
 * Clamps a value between rangeStart and rangeEnd.
 * @param rangeStart Range start.
 * @param rangeEnd Range end.
 * @param value The value to clamp inside the range.
 * @returns The clamped value.
 */
declare const clamp: (rangeStart: number, rangeEnd: number, value: number) => number;

/**
 * Normalizes a value between a given range.
 * @param min Minimum range value.
 * @param max Maximum range value.
 * @param value The value to normalize.
 * @returns The normalized value.
 * @throws RangeError if the range is zero.
 */
declare const normalize: (min: number, max: number, value: number) => number;

/**
 * Remaps a value from one range to another.
 * @param origMin Original minimum value.
 * @param origMax Original maximum value.
 * @param targetMin Target minimum value.
 * @param targetMax Target maximum value.
 * @param num Value to remap.
 * @returns The remapped value.
 * @example
 * remap(0, 100, 0, 1, 50) // returns 0.5
 * remap(0, 100, -100, 100, 75) // returns 50
 */
declare const remap: (origMin: number, origMax: number, targetMin: number, targetMax: number, num: number) => number;

/**
 * Linearly interpolates between two values.
 * @param a Start value.
 * @param b End value.
 * @param t Interpolation factor.
 * @returns Interpolated value.
 */
declare const lerp: (a: number, b: number, t: number) => number;

/**
 * Clamps a value to the unit range [0,1].
 *
 * @param value - The value to clamp
 * @returns A value between 0 and 1
 *
 * @example
 * clampToUnit(0.5)  // returns 0.5
 * clampToUnit(1.5)  // returns 1.0
 * clampToUnit(-0.5) // returns 0.0
 */
declare const clampToUnit: (value: number) => number;

/**
 * Remaps a value within [0,1] to a new subrange in [0,1].
 * @param min Minimum boundary of the range (must be between 0 and 1).
 * @param max Maximum boundary of the range (must be between 0 and 1).
 * @param value The input value (between 0 and 1) to remap within the new range.
 * @returns A remapped value between 0 and 1.
 *
 * @example
 * remapUnit(0.2, 0.8, 0.5) // returns 0.5
 * remapUnit(0, 0.5, 0.25)  // returns 0.5
 */
declare const remapUnit: (min: number, max: number, value: number) => number;

/**
 * Smoothstep function that performs smooth interpolation between 0 and 1 using a cubic Hermite curve.
 * @param x Value between 0 and 1
 * @returns Smoothly interpolated value between 0 and 1
 * @throws Error if x is not in [0,1]
 */
declare const smoothStep: (x: number) => number;

/**
 * Calculates a normalized gaussian (bell curve) value for smooth falloff effects.
 * The function is normalized to work in the [0,1] range, with maximum effect at x=0
 * and smooth decay towards x=1.
 *
 * @param x - Input value in range [0,1]
 * @param strength - Maximum effect at x=0
 * @returns Value between 0 and strength, following gaussian decay
 */
declare const normalizedGaussian: (x: number, strength: number) => number;

/**
 * Converts radians to degrees.
 * @param radians Angle in radians
 * @returns Angle in degrees
 *
 * @example
 * toDegrees(Math.PI);     // returns 180
 * toDegrees(Math.PI / 2); // returns 90
 */
declare const toDegrees: (radians: number) => number;
/**
 * Converts degrees to radians.
 * @param degrees Angle in degrees
 * @returns Angle in radians
 *
 * @example
 * toRadians(180); // returns 3.141592653589793 (Math.PI)
 * toRadians(90);  // returns 1.5707963267948966 (Math.PI / 2)
 */
declare const toRadians: (degrees: number) => number;

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
declare const normalizeWithDeadZones: (threshold_low: number, threshold_high: number, value: number) => number;

export { clamp, clampToUnit, lerp, normalize, normalizeWithDeadZones, normalizedGaussian, remap, remapUnit, smoothStep, toDegrees, toRadians };
