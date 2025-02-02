/**
 * Calculates the length of a horizontal slice (chord) on a circle at a given distance from the top.
 * This is useful for calculating widths at different heights of a circle, like when drawing
 * circular shapes or determining intersections.
 * 
 * The calculation uses the Pythagorean theorem where:
 * - The slice length is the chord length (width at given height)
 * - height is the distance from the edge to where you want to measure the slice
 * - r is the radius of the circle
 * 
 * @param r Radius of the circle
 * @param height Distance from circle's edge to the slice. Must be between 0 and diameter
 * @returns The length of the horizontal slice at the given height
 * 
 * @example
 * // Get width of circle (diameter) at its center
 * getSliceLengthOnCircle(5, 5) // returns 10
 * 
 * // Get width near the edge of the circle
 * getSliceLengthOnCircle(5, 1) // returns ~4.47
 */
export function getSliceLengthOnCircle(r: number, height: number): number {
  return 2 * Math.sqrt(2 * r * height - height * height);
} 