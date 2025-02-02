import { Simple2D, Simple2DLine, Simple2DAndTuple } from "../types";
import { lerp } from "../math";

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
export function linesIntersect(line1: Simple2DLine, line2: Simple2DLine): boolean {
  const [p1, p2] = line1;
  const [q1, q2] = line2;

  const cross = (a: Simple2D, b: Simple2D): number => a.x * b.y - a.y * b.x;
  const subtract = (a: Simple2D, b: Simple2D): Simple2D => ({
    x: a.x - b.x,
    y: a.y - b.y,
  });

  const direction1 = subtract(p2, p1);
  const direction2 = subtract(q2, q1);
  const determinant = cross(direction1, direction2);
  const delta = cross(subtract(q1, p1), direction1);

  // If lines are parallel
  if (determinant === 0) {
    // Check if lines are collinear
    if (delta === 0) {
      // Check for overlap
      const t0 = (subtract(q1, p1).x * direction1.x + subtract(q1, p1).y * direction1.y) 
                 / (direction1.x * direction1.x + direction1.y * direction1.y);
      const t1 = t0 + (direction2.x * direction1.x + direction2.y * direction1.y) 
                 / (direction1.x * direction1.x + direction1.y * direction1.y);
      return Math.min(t0, t1) <= 1 && Math.max(t0, t1) >= 0;
    }
    return false;
  }

  const t = cross(subtract(q1, p1), direction2) / determinant;
  const u = delta / determinant;

  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

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
export const generateLinePoints = (
  line: Simple2DLine,
  count: number
): Simple2DAndTuple[] => {
  if (count < 0) {
    throw new Error('Number of points must be non-negative');
  }

  const [start, end] = line;
  const points: Simple2DAndTuple[] = [];

  // If count is 0, return empty array
  if (count === 0) return points;

  // Generate points using linear interpolation
  for (let i = 1; i <= count; i++) {
    const t = i / (count + 1); // Normalized distance along the line
    points.push(
      createSimple2D(
        lerp(start.x, end.x, t),
        lerp(start.y, end.y, t)
      )
    );
  }

  return points;
}; 