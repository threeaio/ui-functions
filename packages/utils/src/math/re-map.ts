import { clamp } from './clamp';
import { normalize } from './normalize';
import { lerp } from './lerp';

/**
 * Remaps a value from one range to another.
 * @param origMin Original minimum value.
 * @param origMax Original maximum value.
 * @param targetMin Target minimum value.
 * @param targetMax Target maximum value.
 * @param num Value to remap.
 * @returns The remapped value.
 * @example
 * reMap(0, 100, 0, 1, 50) // returns 0.5
 * reMap(0, 100, -100, 100, 75) // returns 50
 */
export const reMap = (
  origMin: number,
  origMax: number,
  targetMin: number,
  targetMax: number,
  num: number,
): number => {
  const numClamped = clamp(origMin, origMax, num);
  const tInOrig = normalize(origMin, origMax, numClamped);
  return lerp(targetMin, targetMax, tInOrig);
}; 