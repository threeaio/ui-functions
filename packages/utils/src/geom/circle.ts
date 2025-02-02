import { Simple2D } from "../types";

const PI = Math.PI;

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

/**
 * Gets a point on an ellipse at a given angle.
 * @param angle Angle in radians.
 * @param radiusX X-radius of the ellipse.
 * @param radiusY Y-radius of the ellipse (defaults to X-radius if undefined).
 * @returns The point on the ellipse as a Simple2D object.
 */
export function getPointOnEllipse(
  angle: number,
  radiusX: number,
  radiusY?: number,
): Simple2D {
  const EPSILON = 1e-10; // Threshold for considering a value as zero
  const effectiveRadiusY = typeof radiusY !== "undefined" ? radiusY : radiusX;
  
  let x = radiusX * Math.cos(angle);
  let y = effectiveRadiusY * Math.sin(angle);
  
  // Clean up near-zero values
  x = Math.abs(x) < EPSILON ? 0 : x;
  y = Math.abs(y) < EPSILON ? 0 : y;
  
  return { x, y };
}

/**
 * Calculates arc length for a given angle on a circle.
 * @param radius Radius of the circle.
 * @param angle Angle in degrees.
 * @returns The arc length.
 * 
 * @example
 * calculateArcLength(5, 90)  // returns ~7.854 (quarter circle)
 * calculateArcLength(5, 360) // returns ~31.416 (full circle)
 */
export const calculateArcLength = (radius: number, angle: number): number => {
  return 2 * Math.PI * radius * (angle / 360);
};

/**
 * Gets the angle in degrees from arc length.
 * @param arcLength Length of the arc.
 * @param radius Radius of the circle.
 * @returns The angle in degrees.
 * 
 * @example
 * getAngleFromArcLengthInDegrees(15.708, 5) // returns 180 (half circle)
 * getAngleFromArcLengthInDegrees(31.416, 5) // returns 360 (full circle)
 */
export const getAngleFromArcLengthInDegrees = (
  arcLength: number,
  radius: number,
): number => {
  const angleInRadians = arcLength / radius;
  return angleInRadians * (180 / PI);
}; 