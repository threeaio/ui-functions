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

// src/animation/waveforms.ts
var waveforms_exports = {};
__export(waveforms_exports, {
  bounce: () => bounce,
  circular: () => circular,
  elastic: () => elastic,
  exponential: () => exponential,
  noise: () => noise,
  pulse: () => pulse,
  sawtooth: () => sawtooth,
  sine: () => sine,
  square: () => square,
  stepped: () => stepped,
  triangle: () => triangle
});
module.exports = __toCommonJS(waveforms_exports);
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
});
