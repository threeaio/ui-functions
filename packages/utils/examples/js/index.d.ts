export { easeInCubic, easeInExpo, easeInOutCubic, easeInOutExpo, easeInOutQuad, easeInQuad, easeOutCubic, easeOutExpo, easeOutQuad } from './examples/easing-bundle.js';
export { bounce, circular, elastic, exponential, noise, pulse, sawtooth, sine, square, stepped, triangle } from './examples/waveforms-bundle.js';

type Simple2DTuple = [number, number];
type Simple2D = {
    x: number;
    y: number;
};
type Simple2DAndTuple = Simple2D & {
    tuple: Simple2DTuple;
};
type Simple2DLine = [Simple2D, Simple2D];

/**
 * Clamps a value between rangeStart and rangeEnd.
 * @param rangeStart Range start.
 * @param rangeEnd Range end.
 * @param value The value to clamp inside the range.
 * @returns The clamped value.
 */
declare const clamp: (rangeStart: number, rangeEnd: number, value: number) => number;

/**
 * Normalizes a value between a given range.
 * @param min Minimum range value.
 * @param max Maximum range value.
 * @param value The value to normalize.
 * @returns The normalized value.
 * @throws RangeError if the range is zero.
 */
declare const normalize: (min: number, max: number, value: number) => number;

/**
 * Remaps a value from one range to another.
 * @param origMin Original minimum value.
 * @param origMax Original maximum value.
 * @param targetMin Target minimum value.
 * @param targetMax Target maximum value.
 * @param num Value to remap.
 * @returns The remapped value.
 * @example
 * remap(0, 100, 0, 1, 50) // returns 0.5
 * remap(0, 100, -100, 100, 75) // returns 50
 */
declare const remap: (origMin: number, origMax: number, targetMin: number, targetMax: number, num: number) => number;

/**
 * Linearly interpolates between two values.
 * @param a Start value.
 * @param b End value.
 * @param t Interpolation factor.
 * @returns Interpolated value.
 */
declare const lerp: (a: number, b: number, t: number) => number;

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
declare const clampToUnit: (value: number) => number;

/**
 * Remaps a value within [0,1] to a new subrange in [0,1].
 * @param min Minimum boundary of the range (must be between 0 and 1).
 * @param max Maximum boundary of the range (must be between 0 and 1).
 * @param value The input value (between 0 and 1) to remap within the new range.
 * @returns A remapped value between 0 and 1.
 *
 * @example
 * remapUnit(0.2, 0.8, 0.5) // returns 0.5
 * remapUnit(0, 0.5, 0.25)  // returns 0.5
 */
declare const remapUnit: (min: number, max: number, value: number) => number;

/**
 * Smoothstep function that performs smooth interpolation between 0 and 1 using a cubic Hermite curve.
 * @param x Value between 0 and 1
 * @returns Smoothly interpolated value between 0 and 1
 * @throws Error if x is not in [0,1]
 */
declare const smoothStep: (x: number) => number;

/**
 * Calculates a normalized gaussian (bell curve) value for smooth falloff effects.
 * The function is normalized to work in the [0,1] range, with maximum effect at x=0
 * and smooth decay towards x=1.
 *
 * @param x - Input value in range [0,1]
 * @param strength - Maximum effect at x=0
 * @returns Value between 0 and strength, following gaussian decay
 */
declare const normalizedGaussian: (x: number, strength: number) => number;

/**
 * Converts radians to degrees.
 * @param radians Angle in radians
 * @returns Angle in degrees
 *
 * @example
 * toDegrees(Math.PI);     // returns 180
 * toDegrees(Math.PI / 2); // returns 90
 */
declare const toDegrees: (radians: number) => number;
/**
 * Converts degrees to radians.
 * @param degrees Angle in degrees
 * @returns Angle in radians
 *
 * @example
 * toRadians(180); // returns 3.141592653589793 (Math.PI)
 * toRadians(90);  // returns 1.5707963267948966 (Math.PI / 2)
 */
declare const toRadians: (degrees: number) => number;

/**
 * Normalizes a value from the unit range [0,1] to a new unit range with "dead zones".
 * Values below 'threshold_low' are mapped to 0,
 * values above 'threshold_high' are mapped to 1,
 * values between thresholds are linearly mapped to [0,1].
 *
 * @param threshold_low Lower threshold (must be between 0 and 1)
 * @param threshold_high Higher threshold (must be between 0 and 1)
 * @param value Input value between 0 and 1
 * @returns Normalized value between 0 and 1
 * @throws {RangeError} If thresholds are invalid or not in [0,1] range
 *
 * @example
 * // With thresholds (0.3, 0.7):
 * // input 0.0 to 0.3 -> output 0 (dead zone)
 * // input 0.3 to 0.7 -> output 0 to 1 (linear mapping)
 * // input 0.7 to 1.0 -> output 1 (saturation)
 */
declare const normalizeWithDeadZones: (threshold_low: number, threshold_high: number, value: number) => number;

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

export { type Simple2D, type Simple2DAndTuple, type Simple2DLine, type Simple2DTuple, calculateArcLength, clamp, clampToUnit, createSimple2D, createSimpleLine, generateLinePoints, getAngleFromArcLengthInDegrees, getPointOnEllipse, getSliceLengthOnCircle, lerp, lerpPoints, linesIntersect, normalize, normalizeWithDeadZones, normalizedGaussian, remap, remapUnit, smoothStep, toDegrees, toRadians };
