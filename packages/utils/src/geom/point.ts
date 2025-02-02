import { Simple2D, Simple2DAndTuple, Simple2DLine } from "../types";

/**
 * Creates a Simple2D point with tuple.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 * @returns A Simple2DAndTuple object.
 * 
 * @example
 * createSimple2D(1, 2) // returns { x: 1, y: 2, tuple: [1, 2] }
 */
export const createSimple2D = (x: number, y: number): Simple2DAndTuple => ({
  x,
  y,
  tuple: [x, y],
});

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
export const createSimpleLine = (
  start: Simple2D,
  end: Simple2D,
): Simple2DLine => [start, end];

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
export const lerpPoints = (
  start: Simple2D,
  end: Simple2D,
  t: number
): Simple2DAndTuple => {
  const x = start.x + (end.x - start.x) * t;
  const y = start.y + (end.y - start.y) * t;
  return createSimple2D(x, y);
}; 