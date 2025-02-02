/**
 * Smoothstep function that performs smooth interpolation between 0 and 1 using a cubic Hermite curve.
 * @param x Value between 0 and 1
 * @returns Smoothly interpolated value between 0 and 1
 * @throws Error if x is not in [0,1]
 */
export const smoothStep = (x: number): number => {
  if (x < 0 || x > 1) {
    throw new Error("Input x must be between 0 and 1");
  }
  return x * x * (3 - 2 * x);
}; 