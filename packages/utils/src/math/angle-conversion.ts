/**
 * Converts radians to degrees.
 * @param radians Angle in radians
 * @returns Angle in degrees
 * 
 * @example
 * toDegrees(Math.PI);     // returns 180
 * toDegrees(Math.PI / 2); // returns 90
 */
export const toDegrees = (radians: number): number => {
  return radians * (180 / Math.PI);
};

/**
 * Converts degrees to radians.
 * @param degrees Angle in degrees
 * @returns Angle in radians
 * 
 * @example
 * toRadians(180); // returns 3.141592653589793 (Math.PI)
 * toRadians(90);  // returns 1.5707963267948966 (Math.PI / 2)
 */
export const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
}; 