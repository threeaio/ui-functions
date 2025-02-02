// src/geom/circle.ts
var PI = Math.PI;
function getSliceLengthOnCircle(r, height) {
  return 2 * Math.sqrt(2 * r * height - height * height);
}
function getPointOnEllipse(angle, radiusX, radiusY) {
  const EPSILON = 1e-10;
  const effectiveRadiusY = typeof radiusY !== "undefined" ? radiusY : radiusX;
  let x = radiusX * Math.cos(angle);
  let y = effectiveRadiusY * Math.sin(angle);
  x = Math.abs(x) < EPSILON ? 0 : x;
  y = Math.abs(y) < EPSILON ? 0 : y;
  return { x, y };
}
var calculateArcLength = (radius, angle) => {
  return 2 * Math.PI * radius * (angle / 360);
};
var getAngleFromArcLengthInDegrees = (arcLength, radius) => {
  const angleInRadians = arcLength / radius;
  return angleInRadians * (180 / PI);
};

// src/geom/point.ts
var createSimple2D = (x, y) => ({
  x,
  y,
  tuple: [x, y]
});
var createSimpleLine = (start, end) => [start, end];
var lerpPoints = (start, end, t) => {
  const x = start.x + (end.x - start.x) * t;
  const y = start.y + (end.y - start.y) * t;
  return createSimple2D(x, y);
};

// src/math/lerp.ts
var lerp = (a, b, t) => a + t * (b - a);

// src/geom/line.ts
function linesIntersect(line1, line2) {
  const [p1, p2] = line1;
  const [q1, q2] = line2;
  const cross = (a, b) => a.x * b.y - a.y * b.x;
  const subtract = (a, b) => ({
    x: a.x - b.x,
    y: a.y - b.y
  });
  const direction1 = subtract(p2, p1);
  const direction2 = subtract(q2, q1);
  const determinant = cross(direction1, direction2);
  const delta = cross(subtract(q1, p1), direction1);
  if (determinant === 0) {
    if (delta === 0) {
      const t0 = (subtract(q1, p1).x * direction1.x + subtract(q1, p1).y * direction1.y) / (direction1.x * direction1.x + direction1.y * direction1.y);
      const t1 = t0 + (direction2.x * direction1.x + direction2.y * direction1.y) / (direction1.x * direction1.x + direction1.y * direction1.y);
      return Math.min(t0, t1) <= 1 && Math.max(t0, t1) >= 0;
    }
    return false;
  }
  const t = cross(subtract(q1, p1), direction2) / determinant;
  const u = delta / determinant;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}
var generateLinePoints = (line, count) => {
  if (count < 0) {
    throw new Error("Number of points must be non-negative");
  }
  const [start, end] = line;
  const points = [];
  if (count === 0) return points;
  for (let i = 1; i <= count; i++) {
    const t = i / (count + 1);
    points.push(
      createSimple2D(
        lerp(start.x, end.x, t),
        lerp(start.y, end.y, t)
      )
    );
  }
  return points;
};

export { calculateArcLength, createSimple2D, createSimpleLine, generateLinePoints, getAngleFromArcLengthInDegrees, getPointOnEllipse, getSliceLengthOnCircle, lerpPoints, linesIntersect };
