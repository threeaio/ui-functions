/**
 * Collection of waveform functions for periodic animations, oscillations, and transitions.
 * Each function takes a value between 0 and 1 and returns a transformed value between 0 and 1.
 * Some functions accept additional parameters to control their behavior.
 */

/**
 * Sine wave oscillation
 */
export const sine = (x: number): number => 
  (Math.sin(x * Math.PI * 2) + 1) / 2;

/**
 * Triangle wave oscillation
 */
export const triangle = (x: number): number => {
  const normalized = x % 1;
  return normalized < 0.5 
    ? normalized * 2 
    : 2 * (1 - normalized);
};

/**
 * Sawtooth wave oscillation
 */
export const sawtooth = (x: number): number => x % 1;

/**
 * Square wave oscillation
 * @param dutyCycle - Percentage of "on" time (0 to 1), defaults to 0.5
 */
export const square = (x: number, dutyCycle = 0.5): number => 
  (x % 1) < dutyCycle ? 1 : 0;

/**
 * Bounce oscillation
 * @param bounces - Number of bounces (default: 3)
 */
export const bounce = (x: number, bounces = 3): number => {
  const normalized = x % 1;
  const frequency = Math.PI * bounces;
  return Math.abs(Math.sin(normalized * frequency)) * (1 - normalized);
};

/**
 * Pulse wave with smooth transitions
 * @param width - Width of the pulse (0 to 1), defaults to 0.5
 */
export const pulse = (x: number, width = 0.5): number => {
  const normalized = x % 1;
  // Center the pulse around the width point and make transition sharper
  const steepness = 80; // Increased for sharper transition
  const centered = normalized - width;
  return 1 / (1 + Math.exp(-steepness * (0.5 - Math.abs(centered))));
};

/**
 * Elastic oscillation
 * @param amplitude - Amplitude of oscillation (default: 1)
 * @param frequency - Frequency of oscillation (default: 3)
 */
export const elastic = (x: number, amplitude = 1, frequency = 3): number => {
  const normalized = x % 1;
  const oscillation = Math.sin(normalized * Math.PI * 2 * frequency) * amplitude;
  const decay = Math.exp(-normalized * 3);
  return (oscillation * decay + amplitude) / (2 * amplitude);
};

/**
 * Pseudo-random noise (deterministic)
 * @param seed - Seed value for noise generation (default: 1)
 */
export const noise = (x: number, seed = 1): number => {
  const normalized = x % 1;
  const value = Math.sin(normalized * 12.9898 * seed) * 43758.5453123;
  return (value - Math.floor(value));
};

/**
 * Stepped output (quantized)
 * @param steps - Number of discrete steps (default: 4)
 */
export const stepped = (x: number, steps = 4): number => 
  Math.floor((x % 1) * steps) / (steps - 1);

/**
 * Circular oscillation
 */
export const circular = (x: number): number => {
  const normalized = x % 1;
  if (normalized === 0 && x !== 0) return 1;
  return 1 - Math.sqrt(1 - Math.pow(normalized, 2));
};

/**
 * Exponential oscillation
 * @param base - Base of exponential (default: 2)
 */
export const exponential = (x: number, base = 2): number => {
  const normalized = x % 1;
  if (normalized === 0 && x !== 0) return 1;
  return (Math.pow(base, normalized) - 1) / (base - 1);
}; 