/**
 * Collection of easing functions for smooth animations and transitions.
 * Each function takes a value between 0 and 1 and returns a transformed value between 0 and 1.
 */
/**
 * Quadratic ease-in
 */
declare const easeInQuad: (x: number) => number;
/**
 * Quadratic ease-out
 */
declare const easeOutQuad: (x: number) => number;
/**
 * Quadratic ease-in-out
 */
declare const easeInOutQuad: (x: number) => number;
/**
 * Cubic ease-in
 */
declare const easeInCubic: (x: number) => number;
/**
 * Cubic ease-out
 */
declare const easeOutCubic: (x: number) => number;
/**
 * Cubic ease-in-out
 */
declare const easeInOutCubic: (x: number) => number;
/**
 * Exponential ease-in
 */
declare const easeInExpo: (x: number) => number;
/**
 * Exponential ease-out
 */
declare const easeOutExpo: (x: number) => number;
/**
 * Exponential ease-in-out
 */
declare const easeInOutExpo: (x: number) => number;

export { easeInCubic, easeInExpo, easeInOutCubic, easeInOutExpo, easeInOutQuad, easeInQuad, easeOutCubic, easeOutExpo, easeOutQuad };
