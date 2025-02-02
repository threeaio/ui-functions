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

// src/animation/easing.ts
var easing_exports = {};
__export(easing_exports, {
  easeInCubic: () => easeInCubic,
  easeInExpo: () => easeInExpo,
  easeInOutCubic: () => easeInOutCubic,
  easeInOutExpo: () => easeInOutExpo,
  easeInOutQuad: () => easeInOutQuad,
  easeInQuad: () => easeInQuad,
  easeOutCubic: () => easeOutCubic,
  easeOutExpo: () => easeOutExpo,
  easeOutQuad: () => easeOutQuad
});
module.exports = __toCommonJS(easing_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  easeInCubic,
  easeInExpo,
  easeInOutCubic,
  easeInOutExpo,
  easeInOutQuad,
  easeInQuad,
  easeOutCubic,
  easeOutExpo,
  easeOutQuad
});
