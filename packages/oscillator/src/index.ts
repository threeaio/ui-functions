import { type WaveformFunction } from '@threeaio/utils/animation';

export interface OscillatorConfig {
    currentTimeMs: number;
    bpm: number;
    waveformfun: WaveformFunction;
    offsetMs?: number;
    phaseShift?: number;
}

export const oscillator = (  config: OscillatorConfig) => {

    const { currentTimeMs, bpm, waveformfun, offsetMs = 0, phaseShift = 0 } = config;

    const msPerBeat = 60000 / bpm;
    const basePosition = ((currentTimeMs + offsetMs) % msPerBeat) / msPerBeat;
    const position = (basePosition + phaseShift / (Math.PI * 2)) % 1;

    return waveformfun(position);
  
};
