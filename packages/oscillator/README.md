# `@threeaio/oscillator`

A super-simple oscillator module that generates values based on time, BPM (beats per minute), and customizable waveform functions.

## Features

- Time-based oscillation with BPM synchronization
- Support for custom waveform functions
- Configurable phase shift and time offset
- Output range of -1 to 1
- TypeScript support

## Installation

```bash
npm install @threeaio/oscillator
```

## Usage

```typescript
import { oscillator } from '@threeaio/oscillator';
import { sineWave } from '@threeaio/utils/animation';

// Basic usage with sine wave
const value = oscillator({
    currentTimeMs: Date.now(), // Current time in milliseconds
    bpm: 120,                  // Beats per minute
    waveformfun: sineWave      // Waveform function
});

// Advanced usage with offset and phase shift
const value = oscillator({
    currentTimeMs: Date.now(),
    bpm: 120,
    waveformfun: sineWave,
    offsetMs: 1000,           // 1 second offset
    phaseShift: Math.PI / 2   // 90 degree phase shift
});
```

## API

### oscillator(config: OscillatorConfig): number

Creates an oscillator that generates values based on time, BPM and a waveform function.

#### Parameters

`config` object properties:

- `currentTimeMs` (number): Current time in milliseconds
- `bpm` (number): Beats per minute (must be greater than 0)
- `waveformfun` (WaveformFunction): Function that generates the waveform value in range [0,1]
- `offsetMs` (number, optional): Time offset in milliseconds. Defaults to 0
- `phaseShift` (number, optional): Phase shift in radians. Defaults to 0

#### Returns

A number between -1 and 1 based on the waveform function.

#### Throws

Throws an Error if BPM is less than or equal to 0.

## Examples

### Using Different Waveforms

```typescript
import { oscillator } from '@threeaio/oscillator';
import { sineWave, sawtoothWave, squareWave } from '@threeaio/utils/animation';

// Sine wave oscillator
const sineValue = oscillator({
    currentTimeMs: Date.now(),
    bpm: 120,
    waveformfun: sineWave
});

// Sawtooth wave oscillator
const sawtoothValue = oscillator({
    currentTimeMs: Date.now(),
    bpm: 120,
    waveformfun: sawtoothWave
});

// Square wave oscillator
const squareValue = oscillator({
    currentTimeMs: Date.now(),
    bpm: 120,
    waveformfun: squareWave
});
```

### Custom Waveform

```typescript
import { oscillator } from '@threeaio/oscillator';

// Custom triangle wave
const triangleWave = (x: number): number => {
    return x < 0.5 ? 2 * x : 2 * (1 - x);
};

const value = oscillator({
    currentTimeMs: Date.now(),
    bpm: 120,
    waveformfun: triangleWave
});
```

## License

MIT
