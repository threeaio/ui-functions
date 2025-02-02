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