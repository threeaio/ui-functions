const fs = require('fs');
const path = require('path');

// Read the HTML templates
const waveformsHtml = fs.readFileSync('src/examples/waveform-example.html', 'utf8');
const easingHtml = fs.readFileSync('src/examples/easing-example.html', 'utf8');

// Create browser-friendly versions of the functions
const waveformsJs = `
const waveforms = {
  sine: (x) => (Math.sin(x * Math.PI * 2) + 1) / 2,
  triangle: (x) => {
    const normalized = x % 1;
    return normalized < 0.5 ? normalized * 2 : 2 * (1 - normalized);
  },
  sawtooth: (x) => x % 1,
  square: (x, dutyCycle = 0.5) => x % 1 < dutyCycle ? 1 : 0,
  bounce: (x, bounces = 3) => {
    const normalized = x % 1;
    const frequency = Math.PI * bounces;
    return Math.abs(Math.sin(normalized * frequency)) * (1 - normalized);
  },
  pulse: (x, width = 0.5) => {
    const normalized = x % 1;
    const centered = normalized - width;
    return 1 / (1 + Math.exp(-80 * (0.5 - Math.abs(centered))));
  },
  elastic: (x, amplitude = 1, frequency = 3) => {
    const normalized = x % 1;
    const oscillation = Math.sin(normalized * Math.PI * 2 * frequency) * amplitude;
    const decay = Math.exp(-normalized * 3);
    return (oscillation * decay + amplitude) / (2 * amplitude);
  },
  noise: (x, seed = 1) => {
    const normalized = x % 1;
    const frequency = 4.9898;
    const amplitude = 9758.5453123;
    const value = Math.sin(normalized * frequency * seed) * amplitude;
    return (value - Math.floor(value)) * 0.4 + 0.2;
  },
  stepped: (x, steps = 4) => Math.floor(x % 1 * steps) / (steps - 1),
  circular: (x) => {
    const normalized = x % 1;
    if (normalized === 0 && x !== 0) return 1;
    return 1 - Math.sqrt(1 - Math.pow(normalized, 2));
  },
  exponential: (x, base = 2) => {
    const normalized = x % 1;
    if (normalized === 0 && x !== 0) return 1;
    return (Math.pow(base, normalized) - 1) / (base - 1);
  }
};`;

const easingJs = `
const easing = {
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => {
    if (x === 0) return 0;
    if (x === 1) return 1;
    if (x === 0.5) return 0.5;
    if (x < 0.5) {
      return Math.pow(2, 20 * x - 10) / 2;
    }
    return 1 - Math.pow(2, -20 * x + 10) / 2;
  }
};`;

// Replace script tags with inlined code
const inlineWaveforms = waveformsHtml.replace(
    '<script src="./js/examples/waveforms-bundle.js"></script>',
    `<script>${waveformsJs}</script>`
);

const inlineEasing = easingHtml.replace(
    '<script src="./js/examples/easing-bundle.js"></script>',
    `<script>${easingJs}</script>`
);

// Write the files
fs.mkdirSync('examples', { recursive: true });
fs.writeFileSync('examples/waveform-example.html', inlineWaveforms);
fs.writeFileSync('examples/easing-example.html', inlineEasing); 