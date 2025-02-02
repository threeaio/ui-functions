'use strict';

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

exports.clamp = clamp;
exports.clampToUnit = clampToUnit;
exports.lerp = lerp;
exports.normalize = normalize;
exports.normalizeWithDeadZones = normalizeWithDeadZones;
exports.normalizedGaussian = normalizedGaussian;
exports.remap = remap;
exports.remapUnit = remapUnit;
exports.smoothStep = smoothStep;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;
