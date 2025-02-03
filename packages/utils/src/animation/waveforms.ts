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
export const sawtooth = (x: number): number => 1 - (x % 1);

/**
 * Square wave oscillation
 * @param dutyCycle - Percentage of "on" time (0 to 1), defaults to 0.5
 */
export const square = (x: number, dutyCycle = 0.5): number => 
  (1 - (x % 1)) < dutyCycle ? 1 : 0;

/**
 * Bounce oscillation
 * @param bounces - Number of bounces (default: 3)
 */
export const bounce = (x: number, bounces = 3): number => {
  const normalized = 1 - (x % 1);
    const frequency = Math.PI * bounces;
    return 1 - (Math.abs(Math.sin(normalized * frequency)) * (1 - normalized));
};

/**
 * Pulse wave with smooth transitions
 * @param width - Width of the pulse (0 to 1), defaults to 0.5
 */
export const pulse = (x: number, width = 0.5): number => {
  const normalized = (1 - (x % 1));
  const centered = normalized - 0.5;
  return 1 / (1 + Math.exp(-80 * (((1 - width) / 2) - Math.abs(centered))));
};

/**
 * Elastic oscillation
 * @param amplitude - Amplitude of oscillation (default: 1)
 * @param frequency - Frequency of oscillation (default: 3)
 */
export const elastic = (x: number, amplitude = 1, frequency = 3): number => {
  const normalized = (1 - (x % 1));
  const oscillation = Math.sin(normalized * Math.PI * 2 * frequency);
  const decay = Math.exp(-normalized * 3);
  return  0.5 + (oscillation * decay * amplitude * 0.5);
};

/**
 * Pseudo-random noise (deterministic)
 * @param x - Input value between 0 and 1
 * @param seed - Seed value that determines the noise pattern (default: 1)
 * @returns Value between 0 and 1
 */
export const noise = (x: number, seed = 1): number => {
  const value = Math.sin(x * 12.9898 + seed * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

/**
 * Stepped output (quantized)
 * @param steps - Number of discrete steps (default: 4)
 */
export const stepped = (x: number, steps = 4): number => 
  Math.floor((1 - (x % 1)) * steps) / (steps - 1);

/**
 * Circular oscillation
 */
export const circular = (x: number): number => {
  const normalized = (1 - (x % 1));
  if (normalized === 0 && x !== 0) return 1;
  return 1 - Math.sqrt(1 - Math.pow(normalized, 2));
};

/**
 * Exponential oscillation
 * @param base - Base of exponential (default: 2)
 */
export const exponential = (x: number, base = 2): number => {
  const normalized = (1 - (x % 1));
  if (normalized === 0 && x !== 0) return 1;
  return (Math.pow(base, normalized) - 1) / (base - 1);
};

/**
 * Curried versions of parameterized waveform functions.
 * These allow for consistent function signatures when using the waveforms.
 */
export const squareWith = (dutyCycle = 0.5) => 
  (x: number): number => square(x, dutyCycle);

export const bounceWith = (bounces = 3) => 
  (x: number): number => bounce(x, bounces);

export const pulseWith = (width = 0.5) => 
  (x: number): number => pulse(x, width);

export const elasticWith = (amplitude = 1, frequency = 3) => 
  (x: number): number => elastic(x, amplitude, frequency);

export const noiseWith = (seed = 1) => 
  (x: number): number => noise(x, seed);

export const steppedWith = (steps = 4) => 
  (x: number): number => stepped(x, steps);

export const exponentialWith = (base = 2) => 
  (x: number): number => exponential(x, base);

/**
 * Type representing all available waveform functions
 */
export type WaveformType = 
  | 'sine'
  | 'triangle'
  | 'sawtooth'
  | 'square'
  | 'bounce'
  | 'pulse'
  | 'elastic'
  | 'noise'
  | 'stepped'
  | 'circular'
  | 'exponential';

/**
 * Interface representing a waveform function
 * @param x - Input value (typically between 0 and 1)
 * @returns A transformed value between 0 and 1
 */
export interface WaveformFunction {
  (x: number): number;
}

/**
 * Type for waveform parameters
 */
export type WaveformParams = {
  square: { dutyCycle?: number };
  bounce: { bounces?: number };
  pulse: { width?: number };
  elastic: { amplitude?: number; frequency?: number };
  noise: { seed?: number };
  stepped: { steps?: number };
  exponential: { base?: number };
  sine: never;
  triangle: never;
  sawtooth: never;
  circular: never;
};

/**
 * Creates a waveform function with optional parameters
 * @param waveform - The type of waveform to create
 * @param params - Optional parameters for configurable waveforms
 * @returns A waveform function that takes a number and returns a number
 * @example
 * ```typescript
 * // Basic waveform without params
 * const sineWave = waveformFactory('sine');
 * 
 * // Configurable waveform with params
 * const customSquare = waveformFactory('square', { dutyCycle: 0.7 });
 * ```
 */
export function waveformFactory<T extends WaveformType>(
  waveform: T,
  params?: WaveformParams[T]
): WaveformFunction {
  switch (waveform) {
    case 'square':
      return squareWith((params as WaveformParams['square'])?.dutyCycle ?? 0.5);
    case 'bounce':
      return bounceWith((params as WaveformParams['bounce'])?.bounces ?? 3);
    case 'pulse':
      return pulseWith((params as WaveformParams['pulse'])?.width ?? 0.5);
    case 'elastic': {
      const p = params as WaveformParams['elastic'];
      return elasticWith(p?.amplitude ?? 1, p?.frequency ?? 3);
    }
    case 'noise':
      return noiseWith((params as WaveformParams['noise'])?.seed ?? 1);
    case 'stepped':
      return steppedWith((params as WaveformParams['stepped'])?.steps ?? 4);
    case 'exponential':
      return exponentialWith((params as WaveformParams['exponential'])?.base ?? 2);
    case 'sine':
      return sine;
    case 'triangle':
      return triangle;
    case 'sawtooth':
      return sawtooth;
    case 'circular':
      return circular;
    default:
      throw new Error(`Invalid waveform: ${waveform}`);
  }
}
