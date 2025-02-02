import "./chunk-V6M5UNNI.mjs";
import {
  bounce,
  circular,
  elastic,
  exponential,
  noise,
  pulse,
  sawtooth,
  sine,
  square,
  stepped,
  triangle
} from "./chunk-IXIAXKAU.mjs";
import {
  easeInCubic,
  easeInExpo,
  easeInOutCubic,
  easeInOutExpo,
  easeInOutQuad,
  easeInQuad,
  easeOutCubic,
  easeOutExpo,
  easeOutQuad
} from "./chunk-Z75FMHTG.mjs";

// src/math/clamp.ts
var clamp = (rangeStart, rangeEnd, value) => {
  const _min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
  const _max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
  return Math.min(Math.max(_min, value), _max);
};

// src/math/normalize.ts
var normalize = (min, max, value) => {
  if (max - min === 0) return 0.5;
  return (value - min) / (max - min);
};

// src/math/lerp.ts
var lerp = (a, b, t) => a + t * (b - a);

// src/math/remap.ts
var remap = (origMin, origMax, targetMin, targetMax, num) => {
  const numClamped = clamp(origMin, origMax, num);
  const tInOrig = normalize(origMin, origMax, numClamped);
  return lerp(targetMin, targetMax, tInOrig);
};

// src/math/clamp-to-unit.ts
var clampToUnit = (value) => {
  return clamp(0, 1, value);
};

// src/math/remap-unit.ts
var remapUnit = (min, max, value) => {
  if (max > 1 || max < 0 || min > 1 || min < 0)
    throw new RangeError("Range values must be between 0 and 1");
  if (max - min === 0)
    throw new RangeError(
      `Range must be greater than 0. Given was max: ${max} and min: ${min}`
    );
  const normalizedValue = (value - min) / (max - min);
  return Math.min(Math.max(normalizedValue, 0), 1);
};

// src/math/smooth-step.ts
var smoothStep = (x) => {
  if (x < 0 || x > 1) {
    throw new Error("Input x must be between 0 and 1");
  }
  return x * x * (3 - 2 * x);
};

// src/math/normalized-gaussian.ts
var normalizedGaussian = (x, strength) => {
  const normalizedX = x * 4;
  return strength * Math.exp(-(normalizedX * normalizedX) / 2);
};

// src/math/angle-conversion.ts
var toDegrees = (radians) => {
  return radians * (180 / Math.PI);
};
var toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

// src/math/normalize-with-dead-zones.ts
var normalizeWithDeadZones = (threshold_low, threshold_high, value) => {
  if (threshold_high > 1 || threshold_high < 0 || threshold_low > 1 || threshold_low < 0) {
    throw new RangeError("Thresholds must be between 0 and 1");
  }
  if (threshold_high <= threshold_low) {
    throw new RangeError(
      `High threshold must be greater than low threshold. Given: low ${threshold_low}, high ${threshold_high}`
    );
  }
  const normalizedValue = (value - threshold_low) / (threshold_high - threshold_low);
  return Math.min(Math.max(normalizedValue, 0), 1);
};

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
export {
  bounce,
  calculateArcLength,
  circular,
  clamp,
  clampToUnit,
  createSimple2D,
  createSimpleLine,
  easeInCubic,
  easeInExpo,
  easeInOutCubic,
  easeInOutExpo,
  easeInOutQuad,
  easeInQuad,
  easeOutCubic,
  easeOutExpo,
  easeOutQuad,
  elastic,
  exponential,
  generateLinePoints,
  getAngleFromArcLengthInDegrees,
  getPointOnEllipse,
  getSliceLengthOnCircle,
  lerp,
  lerpPoints,
  linesIntersect,
  noise,
  normalize,
  normalizeWithDeadZones,
  normalizedGaussian,
  pulse,
  remap,
  remapUnit,
  sawtooth,
  sine,
  smoothStep,
  square,
  stepped,
  toDegrees,
  toRadians,
  triangle
};
