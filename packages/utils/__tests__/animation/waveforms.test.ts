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
      expect(sawtooth(0)).toBe(0);
      expect(sawtooth(0.5)).toBeCloseTo(0.5);
      expect(sawtooth(0.25)).toBeCloseTo(0.25);
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
      expect(square(0.2, 0.3)).toBe(1);
      expect(square(0.4, 0.3)).toBe(0);
      expect(square(0.6, 0.7)).toBe(1);
      expect(square(0.8, 0.7)).toBe(0);
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
      expect(peaks.size).toBe(3);
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
      expect(pulse(0.3, 0.4)).toBeLessThan(pulse(0.4, 0.4));
      const value1 = pulse(0.5, 0.4);
      const value2 = pulse(0.6, 0.4);
      expect(value1).toBeGreaterThan(value2);
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
      
      expect(Math.abs(highAmplitude)).toBeGreaterThan(Math.abs(normal) - Number.EPSILON);
      expect(elastic(0.1, 1, 6)).not.toBeCloseTo(elastic(0.1, 1, 3));
    });
  });

  describe('noise', () => {
    it('should output values between 0 and 1', () => {
      testRange(noise);
    });

    it('should be deterministic', () => {
      const seed = 42;
      expect(noise(0.5, seed)).toEqual(noise(0.5, seed));
    });

    it('should produce different values with different seeds', () => {
      expect(noise(0.5, 1)).not.toEqual(noise(0.5, 2));
    });
  });

  describe('stepped', () => {
    it('should output values between 0 and 1', () => {
      testRange(stepped);
    });

    it('should be periodic', () => {
      testPeriodicity(stepped);
    });

    it('should respect step count', () => {
      const values = new Set();
      for (let i = 0; i < 100; i++) {
        values.add(stepped(i / 100, 4));
      }
      expect(values.size).toBe(4);
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
      expect(circular(0)).toBe(0);
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
      expect(exponential(0.5, 2)).not.toEqual(exponential(0.5, 3));
      expect(exponential(0, 2)).toBe(0);
      expect(exponential(1, 2)).toBe(1);
    });
  });
}); 