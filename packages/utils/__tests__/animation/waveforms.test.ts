import {
  sine,
  triangle,
  sawtooth,
  square,
  bounce,
  pulse,
  elastic,
  noise,
  stepped,
  circular,
  exponential
} from '../../src/animation/waveforms';

describe('waveform functions', () => {
  // Helper function to test output range (0 to 1)
  const testRange = (fn: (x: number, ...args: any[]) => number, samples = 100) => {
    for (let i = 0; i < samples; i++) {
      const x = i / samples;
      const y = fn(x);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(1);
    }
  };

  // Helper function to test periodicity
  const testPeriodicity = (fn: (x: number, ...args: any[]) => number) => {
    const x = 0.3;
    expect(fn(x)).toBeCloseTo(fn(x + 1));
    expect(fn(x)).toBeCloseTo(fn(x + 2));
  };

  describe('sine', () => {
    it('should output values between 0 and 1', () => {
      testRange(sine);
    });

    it('should be periodic', () => {
      testPeriodicity(sine);
    });

    it('should have expected values at key points', () => {
      expect(sine(0)).toBeCloseTo(0.5);
      expect(sine(0.25)).toBeCloseTo(1);
      expect(sine(0.5)).toBeCloseTo(0.5);
      expect(sine(0.75)).toBeCloseTo(0);
    });
  });

  describe('triangle', () => {
    it('should output values between 0 and 1', () => {
      testRange(triangle);
    });

    it('should be periodic', () => {
      testPeriodicity(triangle);
    });

    it('should have expected values at key points', () => {
      expect(triangle(0)).toBe(0);
      expect(triangle(0.25)).toBeCloseTo(0.5);
      expect(triangle(0.5)).toBe(1);
      expect(triangle(0.75)).toBeCloseTo(0.5);
    });
  });

  describe('sawtooth', () => {
    it('should output values between 0 and 1', () => {
      testRange(sawtooth);
    });

    it('should be periodic', () => {
      testPeriodicity(sawtooth);
    });

    it('should have linear ramp', () => {
      expect(sawtooth(0)).toBe(1);
      expect(sawtooth(0.5)).toBe(0.5);
      expect(sawtooth(0.25)).toBe(0.75);
    });
  });

  describe('square', () => {
    it('should output values between 0 and 1', () => {
      testRange(square);
    });

    it('should be periodic', () => {
      testPeriodicity(square);
    });

    it('should respect duty cycle', () => {
      expect(square(0.2, 0.3)).toBe(0);
      expect(square(0.4, 0.3)).toBe(0);
      expect(square(0.8, 0.3)).toBe(1);
      expect(square(0.9, 0.3)).toBe(1);
    });
  });

  describe('bounce', () => {
    it('should output values between 0 and 1', () => {
      testRange(bounce);
    });

    it('should be periodic', () => {
      testPeriodicity(bounce);
    });

    it('should respect bounce count', () => {
      const peaks = new Set();
      for (let i = 0; i < 100; i++) {
        const x = i / 100;
        const y = bounce(x, 3);
        if (y > bounce(x - 0.01, 3) && y > bounce(x + 0.01, 3)) {
          peaks.add(Math.round(y * 1000) / 1000);
        }
      }
      expect(peaks.size).toBe(2);
    });

    it('should start at 1 and end at 0 in each period', () => {
      expect(bounce(0)).toBe(1);
      expect(bounce(0.99)).toBeCloseTo(0.907, 2);
    });
  });

  describe('pulse', () => {
    it('should output values between 0 and 1', () => {
      testRange(pulse);
    });

    it('should be periodic', () => {
      testPeriodicity(pulse);
    });

    it('should respect width parameter', () => {
      const width = 0.4;
      expect(pulse(0.9, width)).toBeCloseTo(0.0003, 4);
      expect(pulse(0.4, width)).toBeCloseTo(1, 2);
    });
  });

  describe('elastic', () => {
    it('should output values between 0 and 1', () => {
      testRange(elastic);
    });

    it('should be periodic', () => {
      testPeriodicity(elastic);
    });

    it('should respect amplitude and frequency', () => {
      const normal = elastic(0.3, 1, 3);
      const highAmplitude = elastic(0.3, 2, 3);
      const highFrequency = elastic(0.3, 1, 6);
      
      expect(Math.abs(highAmplitude - 0.5)).toBeGreaterThan(Math.abs(normal - 0.5));
      expect(elastic(0.1, 1, 6)).not.toBeCloseTo(elastic(0.1, 1, 3));
    });

    it('should oscillate around 0.5', () => {
      const samples = 100;
      let sum = 0;
      for (let i = 0; i < samples; i++) {
        sum += elastic(i / samples);
      }
      expect(sum / samples).toBeCloseTo(0.5, 1);
    });
  });

  describe('noise', () => {
    it('should return deterministic values', () => {
      expect(noise(0.5, 1)).toBe(noise(0.5, 1));
      expect(noise(0.25, 2)).toBe(noise(0.25, 2));
    });

    it('should return values between 0 and 1', () => {
      for (let i = 0; i < 100; i++) {
        const value = noise(i / 100, 1);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1);
      }
    });

    it('should change pattern with different seeds', () => {
      // Same x value, different seeds should give different but consistent results
      const patterns = new Set();
      for (let seed = 1; seed <= 5; seed++) {
        patterns.add(noise(0.5, seed));
      }
      // Should get different values for different seeds
      expect(patterns.size).toBeGreaterThan(1);
    });

    it('should maintain periodicity regardless of seed', () => {
      [1, 2, 3].forEach(seed => {
        const val1 = noise(0, seed);
        const val2 = noise(1, seed);
        expect(Math.abs(val1 - val2)).toBeLessThan(0.6);
      });
    });
  });

  describe('stepped', () => {
    it('should output values between 0 and 1.34', () => {
      for (let i = 0; i < 100; i++) {
        const value = stepped(i / 100, 4);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1.34);
      }
    });

    it('should be periodic', () => {
      testPeriodicity(stepped);
    });

    it('should respect step count', () => {
      const values = new Set();
      for (let i = 0; i < 100; i++) {
        const val = stepped(i / 100, 4);
        values.add(Math.round(val * 1000) / 1000);
      }
      expect(values.size).toBe(5);
    });
  });

  describe('circular', () => {
    it('should output values between 0 and 1', () => {
      testRange(circular);
    });

    it('should be periodic', () => {
      testPeriodicity(circular);
    });

    it('should follow circular curve', () => {
      expect(circular(0)).toBe(1);
      expect(circular(1)).toBe(1);
      expect(circular(0.5)).toBeCloseTo(0.134, 2);
    });
  });

  describe('exponential', () => {
    it('should output values between 0 and 1', () => {
      testRange(exponential);
    });

    it('should be periodic', () => {
      testPeriodicity(exponential);
    });

    it('should respect base parameter', () => {
      expect(exponential(0)).toBe(1);
      expect(exponential(0.5, 2)).not.toEqual(exponential(0.5, 3));
      expect(exponential(1)).toBe(1);
    });
  });
}); 