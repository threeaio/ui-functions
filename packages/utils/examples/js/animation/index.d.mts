/**
 * Collection of easing functions for smooth animations and transitions.
 * Each function takes a value between 0 and 1 and returns a transformed value between 0 and 1.
 */
/**
 * Quadratic ease-in
 */
declare const easeInQuad: (x: number) => number;
/**
 * Quadratic ease-out
 */
declare const easeOutQuad: (x: number) => number;
/**
 * Quadratic ease-in-out
 */
declare const easeInOutQuad: (x: number) => number;
/**
 * Cubic ease-in
 */
declare const easeInCubic: (x: number) => number;
/**
 * Cubic ease-out
 */
declare const easeOutCubic: (x: number) => number;
/**
 * Cubic ease-in-out
 */
declare const easeInOutCubic: (x: number) => number;
/**
 * Exponential ease-in
 */
declare const easeInExpo: (x: number) => number;
/**
 * Exponential ease-out
 */
declare const easeOutExpo: (x: number) => number;
/**
 * Exponential ease-in-out
 */
declare const easeInOutExpo: (x: number) => number;

/**
 * Collection of waveform functions for periodic animations, oscillations, and transitions.
 * Each function takes a value between 0 and 1 and returns a transformed value between 0 and 1.
 * Some functions accept additional parameters to control their behavior.
 */
/**
 * Sine wave oscillation
 */
declare const sine: (x: number) => number;
/**
 * Triangle wave oscillation
 */
declare const triangle: (x: number) => number;
/**
 * Sawtooth wave oscillation
 */
declare const sawtooth: (x: number) => number;
/**
 * Square wave oscillation
 * @param dutyCycle - Percentage of "on" time (0 to 1), defaults to 0.5
 */
declare const square: (x: number, dutyCycle?: number) => number;
/**
 * Bounce oscillation
 * @param bounces - Number of bounces (default: 3)
 */
declare const bounce: (x: number, bounces?: number) => number;
/**
 * Pulse wave with smooth transitions
 * @param width - Width of the pulse (0 to 1), defaults to 0.5
 */
declare const pulse: (x: number, width?: number) => number;
/**
 * Elastic oscillation
 * @param amplitude - Amplitude of oscillation (default: 1)
 * @param frequency - Frequency of oscillation (default: 3)
 */
declare const elastic: (x: number, amplitude?: number, frequency?: number) => number;
/**
 * Pseudo-random noise (deterministic)
 * @param x - Input value between 0 and 1
 * @param seed - Seed value that determines the noise pattern (default: 1)
 * @returns Value between 0 and 1
 */
declare const noise: (x: number, seed?: number) => number;
/**
 * Stepped output (quantized)
 * @param steps - Number of discrete steps (default: 4)
 */
declare const stepped: (x: number, steps?: number) => number;
/**
 * Circular oscillation
 */
declare const circular: (x: number) => number;
/**
 * Exponential oscillation
 * @param base - Base of exponential (default: 2)
 */
declare const exponential: (x: number, base?: number) => number;

export { bounce, circular, easeInCubic, easeInExpo, easeInOutCubic, easeInOutExpo, easeInOutQuad, easeInQuad, easeOutCubic, easeOutExpo, easeOutQuad, elastic, exponential, noise, pulse, sawtooth, sine, square, stepped, triangle };
