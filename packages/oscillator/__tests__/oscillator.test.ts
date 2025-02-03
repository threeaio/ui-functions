import { oscillator, type OscillatorConfig } from '../src';
import { waveformFactory } from '../../utils/src/animation';

describe('oscillator', () => {
    const sineWave = waveformFactory('sine');
    const squareWave = waveformFactory('square');

    const createConfig = (overrides?: Partial<OscillatorConfig>): OscillatorConfig => ({
        currentTimeMs: 0,
        bpm: 60,
        waveformfun: sineWave,
        ...overrides
    });

    it('should throw error for invalid BPM', () => {
        expect(() => oscillator(createConfig({ bpm: 0 }))).toThrow('BPM must be greater than 0');
        expect(() => oscillator(createConfig({ bpm: -1 }))).toThrow('BPM must be greater than 0');
    });

    it('should generate correct values for sine wave at 60 BPM', () => {
        // At 60 BPM, one beat is exactly 1000ms
        const config = createConfig({ waveformfun: sineWave });
        
        // Start (0ms) should be 0
        expect(oscillator({ ...config, currentTimeMs: 0 })).toBeCloseTo(0);
        
        // Quarter beat (250ms) should be 1
        expect(oscillator({ ...config, currentTimeMs: 250 })).toBeCloseTo(1);
        
        // Half beat (500ms) should be 0
        expect(oscillator({ ...config, currentTimeMs: 500 })).toBeCloseTo(0);
        
        // Three quarters beat (750ms) should be -1
        expect(oscillator({ ...config, currentTimeMs: 750 })).toBeCloseTo(-1);
        
        // Full beat (1000ms) should wrap back to 0
        expect(oscillator({ ...config, currentTimeMs: 1000 })).toBeCloseTo(0);
    });

    it('should handle offset correctly', () => {
        const config = createConfig({ waveformfun: sineWave });
        const withoutOffset = oscillator(config);
        const withOffset = oscillator({ ...config, offsetMs: 250 });
        
        // With 250ms offset, the value should be the same as if we were at 250ms
        expect(withOffset).toBeCloseTo(1);
    });

    it('should handle phase shift correctly', () => {
        const config = createConfig({ waveformfun: sineWave });
        const withoutPhase = oscillator(config);
        const withPhaseShift = oscillator({ ...config, phaseShift: Math.PI }); // Half cycle shift
        
        // Phase shift of PI should invert the value
        expect(withPhaseShift).toBeCloseTo(-withoutPhase);
    });

    it('should work with square wave', () => {
        const config = createConfig({ waveformfun: squareWave });
        
        // First half of the beat should be 1
        expect(oscillator({ ...config, currentTimeMs: 0 })).toBe(1);
        expect(oscillator({ ...config, currentTimeMs: 499 })).toBe(1);
        
        // Second half of the beat should be -1
        expect(oscillator({ ...config, currentTimeMs: 500 })).toBe(-1);
        expect(oscillator({ ...config, currentTimeMs: 999 })).toBe(-1);
    });

    it('should handle different BPM values', () => {
        const config = createConfig({ waveformfun: sineWave });
        
        // At 120 BPM, one beat is 500ms
        const fastConfig = { ...config, bpm: 120 };
        expect(oscillator({ ...fastConfig, currentTimeMs: 0 })).toBeCloseTo(0);
        expect(oscillator({ ...fastConfig, currentTimeMs: 125 })).toBeCloseTo(1);
        expect(oscillator({ ...fastConfig, currentTimeMs: 250 })).toBeCloseTo(0);
        
        // At 30 BPM, one beat is 2000ms
        const slowConfig = { ...config, bpm: 30 };
        expect(oscillator({ ...slowConfig, currentTimeMs: 0 })).toBeCloseTo(0);
        expect(oscillator({ ...slowConfig, currentTimeMs: 500 })).toBeCloseTo(1);
        expect(oscillator({ ...slowConfig, currentTimeMs: 1000 })).toBeCloseTo(0);
    });
}); 