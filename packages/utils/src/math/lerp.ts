/**
 * Linearly interpolates between two values.
 * @param a Start value.
 * @param b End value.
 * @param t Interpolation factor.
 * @returns Interpolated value.
 */
export const lerp = (a: number, b: number, t: number) => a + t * (b - a);