import { clamp } from "./clamp";

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
export const clampToUnit = (value: number): number => {
    return clamp(0, 1, value);
  };