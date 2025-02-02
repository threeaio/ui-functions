"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  bounce: () => bounce,
  calculateArcLength: () => calculateArcLength,
  circular: () => circular,
  clamp: () => clamp,
  clampToUnit: () => clampToUnit,
  createSimple2D: () => createSimple2D,
  createSimpleLine: () => createSimpleLine,
  easeInCubic: () => easeInCubic,
  easeInExpo: () => easeInExpo,
  easeInOutCubic: () => easeInOutCubic,
  easeInOutExpo: () => easeInOutExpo,
  easeInOutQuad: () => easeInOutQuad,
  easeInQuad: () => easeInQuad,
  easeOutCubic: () => easeOutCubic,
  easeOutExpo: () => easeOutExpo,
  easeOutQuad: () => easeOutQuad,
  elastic: () => elastic,
  exponential: () => exponential,
  generateLinePoints: () => generateLinePoints,
  getAngleFromArcLengthInDegrees: () => getAngleFromArcLengthInDegrees,
  getPointOnEllipse: () => getPointOnEllipse,
  getSliceLengthOnCircle: () => getSliceLengthOnCircle,
  lerp: () => lerp,
  lerpPoints: () => lerpPoints,
  linesIntersect: () => linesIntersect,
  noise: () => noise,
  normalize: () => normalize,
  normalizeWithDeadZones: () => normalizeWithDeadZones,
  normalizedGaussian: () => normalizedGaussian,
  pulse: () => pulse,
  remap: () => remap,
  remapUnit: () => remapUnit,
  sawtooth: () => sawtooth,
  sine: () => sine,
  smoothStep: () => smoothStep,
  square: () => square,
  stepped: () => stepped,
  toDegrees: () => toDegrees,
  toRadians: () => toRadians,
  triangle: () => triangle
});
module.exports = __toCommonJS(src_exports);

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

// src/animation/easing.ts
var easeInQuad = (x) => x * x;
var easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
var easeInOutQuad = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
var easeInCubic = (x) => x * x * x;
var easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
var easeInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
var easeInExpo = (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10);
var easeOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
var easeInOutExpo = (x) => {
  if (x === 0) return 0;
  if (x === 1) return 1;
  if (x === 0.5) return 0.5;
  if (x < 0.5) {
    return Math.pow(2, 20 * x - 10) / 2;
  }
  return 1 - Math.pow(2, -20 * x + 10) / 2;
};

// src/animation/waveforms.ts
var sine = (x) => (Math.sin(x * Math.PI * 2) + 1) / 2;
var triangle = (x) => {
  const normalized = x % 1;
  return normalized < 0.5 ? normalized * 2 : 2 * (1 - normalized);
};
var sawtooth = (x) => x % 1;
var square = (x, dutyCycle = 0.5) => x % 1 < dutyCycle ? 1 : 0;
var bounce = (x, bounces = 3) => {
  const normalized = x % 1;
  const frequency = Math.PI * bounces;
  return Math.abs(Math.sin(normalized * frequency)) * (1 - normalized);
};
var pulse = (x, width = 0.5) => {
  const normalized = x % 1;
  const steepness = 80;
  const centered = normalized - width;
  return 1 / (1 + Math.exp(-steepness * (0.5 - Math.abs(centered))));
};
var elastic = (x, amplitude = 1, frequency = 3) => {
  const normalized = x % 1;
  const oscillation = Math.sin(normalized * Math.PI * 2 * frequency) * amplitude;
  const decay = Math.exp(-normalized * 3);
  return (oscillation * decay + amplitude) / (2 * amplitude);
};
var noise = (x, seed = 1) => {
  const normalized = x % 1;
  const frequency = 4.9898;
  const amplitude = 9758.5453123;
  const value = Math.sin(normalized * frequency * seed) * amplitude;
  return (value - Math.floor(value)) * 0.4 + 0.2;
};
var stepped = (x, steps = 4) => Math.floor(x % 1 * steps) / (steps - 1);
var circular = (x) => {
  const normalized = x % 1;
  if (normalized === 0 && x !== 0) return 1;
  return 1 - Math.sqrt(1 - Math.pow(normalized, 2));
};
var exponential = (x, base = 2) => {
  const normalized = x % 1;
  if (normalized === 0 && x !== 0) return 1;
  return (Math.pow(base, normalized) - 1) / (base - 1);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
