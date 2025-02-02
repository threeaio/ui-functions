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

export {
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo
};
