import { type WaveformFunction } from '@threeaio/utils/animation';

export interface OscillatorConfig {
    currentTimeMs: number;
    bpm: number;
    waveformfun: WaveformFunction;
    offsetMs?: number;
    phaseShift?: number;
}

/**
 * Creates an oscillator that generates values based on time, BPM and a waveform function
 * 
 * @param config - Configuration object for the oscillator
 * @param config.currentTimeMs - Current time in milliseconds
 * @param config.bpm - Beats per minute
 * @param config.waveformfun - Function that generates the waveform value
 * @param config.offsetMs - Time offset in milliseconds (default: 0)
 * @param config.phaseShift - Phase shift in radians (default: 0)
 * @returns A value between -1 and 1 based on the waveform function
 * 
 * @throws {Error} If BPM is less than or equal to 0
 */
export const oscillator = (config: OscillatorConfig): number => {
    const { currentTimeMs, bpm, waveformfun, offsetMs = 0, phaseShift = 0 } = config;

    if (bpm <= 0) {
        throw new Error('BPM must be greater than 0');
    }

    const millisecondsPerBeat = 60000 / bpm;
    const normalizedPosition = ((currentTimeMs + offsetMs) % millisecondsPerBeat) / millisecondsPerBeat;
    const positionWithPhase = (normalizedPosition + phaseShift / (Math.PI * 2)) % 1;

    return waveformfun(positionWithPhase);
};
