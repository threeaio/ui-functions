import { Simple2D, Simple2DAndTuple, Simple2DLine } from '../types/index.js';

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
declare function getSliceLengthOnCircle(r: number, height: number): number;
/**
 * Gets a point on an ellipse at a given angle.
 * @param angle Angle in radians.
 * @param radiusX X-radius of the ellipse.
 * @param radiusY Y-radius of the ellipse (defaults to X-radius if undefined).
 * @returns The point on the ellipse as a Simple2D object.
 */
declare function getPointOnEllipse(angle: number, radiusX: number, radiusY?: number): Simple2D;
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
declare const calculateArcLength: (radius: number, angle: number) => number;
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
declare const getAngleFromArcLengthInDegrees: (arcLength: number, radius: number) => number;

/**
 * Creates a Simple2D point with tuple.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 * @returns A Simple2DAndTuple object.
 *
 * @example
 * createSimple2D(1, 2) // returns { x: 1, y: 2, tuple: [1, 2] }
 */
declare const createSimple2D: (x: number, y: number) => Simple2DAndTuple;
/**
 * Creates a line between two points.
 * @param start Start point.
 * @param end End point.
 * @returns A Simple2DLine.
 *
 * @example
 * createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 })
 * // returns [{ x: 0, y: 0 }, { x: 1, y: 1 }]
 */
declare const createSimpleLine: (start: Simple2D, end: Simple2D) => Simple2DLine;
/**
 * Linearly interpolates between two points.
 * @param start Start point.
 * @param end End point.
 * @param t Interpolation value between 0 and 1.
 * @returns A Simple2DAndTuple representing the interpolated point.
 *
 * @example
 * lerpPoints({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.5)
 * // returns { x: 5, y: 5, tuple: [5, 5] }
 */
declare const lerpPoints: (start: Simple2D, end: Simple2D, t: number) => Simple2DAndTuple;

/**
 * Checks if two line segments intersect, including collinear overlapping segments.
 * @param line1 First line segment defined by two points.
 * @param line2 Second line segment defined by two points.
 * @returns True if the line segments intersect or overlap, false otherwise.
 *
 * @example
 * const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
 * const line2 = createSimpleLine({ x: 0, y: 1 }, { x: 1, y: 0 });
 * linesIntersect(line1, line2); // returns true
 */
declare function linesIntersect(line1: Simple2DLine, line2: Simple2DLine): boolean;
/**
 * Generates evenly spaced points along a line segment.
 * Points are generated between start and end points (exclusive).
 *
 * @param line Line segment defined by two points
 * @param count Number of points to generate
 * @returns Array of points along the line
 * @throws {Error} If count is negative
 *
 * @example
 * const line = createSimpleLine({ x: 0, y: 0 }, { x: 2, y: 2 });
 * generateLinePoints(line, 2)
 * // returns [
 * //   { x: 0.666..., y: 0.666..., tuple: [0.666..., 0.666...] },
 * //   { x: 1.333..., y: 1.333..., tuple: [1.333..., 1.333...] }
 * // ]
 */
declare const generateLinePoints: (line: Simple2DLine, count: number) => Simple2DAndTuple[];

export { calculateArcLength, createSimple2D, createSimpleLine, generateLinePoints, getAngleFromArcLengthInDegrees, getPointOnEllipse, getSliceLengthOnCircle, lerpPoints, linesIntersect };
