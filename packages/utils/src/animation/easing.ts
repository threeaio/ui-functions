/**
 * Collection of easing functions for smooth animations and transitions.
 * Each function takes a value between 0 and 1 and returns a transformed value between 0 and 1.
 */

/**
 * Quadratic ease-in
 */
export const easeInQuad = (x: number): number => x * x;

/**
 * Quadratic ease-out
 */
export const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);

/**
 * Quadratic ease-in-out
 */
export const easeInOutQuad = (x: number): number => 
  x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

/**
 * Cubic ease-in
 */
export const easeInCubic = (x: number): number => x * x * x;

/**
 * Cubic ease-out
 */
export const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

/**
 * Cubic ease-in-out
 */
export const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

/**
 * Exponential ease-in
 */
export const easeInExpo = (x: number): number =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

/**
 * Exponential ease-out
 */
export const easeOutExpo = (x: number): number =>
  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

/**
 * Exponential ease-in-out
 */
export const easeInOutExpo = (x: number): number => {
  if (x === 0) return 0;
  if (x === 1) return 1;
  if (x === 0.5) return 0.5;
  if (x < 0.5) {
    return Math.pow(2, 20 * x - 10) / 2;
  }
  return 1 - Math.pow(2, -20 * x + 10) / 2;
}; 