import {
  sine,
  triangle,
  sawtooth,
  square,
  squareWith,
  bounce,
  bounceWith,
  pulse,
  pulseWith,
  elastic,
  elasticWith,
  noise,
  noiseWith,
  stepped,
  steppedWith,
  circular,
  exponential,
  exponentialWith
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

  // Test pairs of original and curried functions
  const testCurriedEquivalence = (
    original: (x: number, ...args: any[]) => number,
    curried: (...args: any[]) => (x: number) => number,
    args: any[]
  ) => {
    const x = 0.5;
    expect(original(x, ...args)).toBeCloseTo(curried(...args)(x));
  };

  // Basic waveform tests remain unchanged...
  describe('sine', () => {
    it('should output values between 0 and 1', () => {
      testRange(sine);
    });

    it('should be periodic', () => {
      testPeriodicity(sine);
    });
  });

  // ... other basic waveform tests (triangle, sawtooth, circular) ...

  // Test pairs of original and curried functions
  describe('square and squareWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(square, squareWith, [0.7]);
    });

    it('curried version should maintain periodicity', () => {
      const squareCustom = squareWith(0.7);
      testPeriodicity(squareCustom);
    });
  });

  describe('bounce and bounceWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(bounce, bounceWith, [5]);
    });

    it('curried version should maintain periodicity', () => {
      const bounceCustom = bounceWith(5);
      testPeriodicity(bounceCustom);
    });
  });

  describe('pulse and pulseWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(pulse, pulseWith, [0.3]);
    });

    it('curried version should maintain periodicity', () => {
      const pulseCustom = pulseWith(0.3);
      testPeriodicity(pulseCustom);
    });
  });

  describe('elastic and elasticWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(elastic, elasticWith, [1.5, 4]);
    });

    it('curried version should maintain periodicity', () => {
      const elasticCustom = elasticWith(1.5, 4);
      testPeriodicity(elasticCustom);
    });
  });

  describe('noise and noiseWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(noise, noiseWith, [42]);
    });

    it('curried version should maintain deterministic output', () => {
      const noiseCustom = noiseWith(42);
      const x = 0.5;
      expect(noiseCustom(x)).toBe(noiseCustom(x));
    });
  });

  describe('stepped and steppedWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(stepped, steppedWith, [6]);
    });

    it('curried version should maintain periodicity', () => {
      const steppedCustom = steppedWith(6);
      testPeriodicity(steppedCustom);
    });
  });

  describe('exponential and exponentialWith', () => {
    it('should be equivalent', () => {
      testCurriedEquivalence(exponential, exponentialWith, [3]);
    });

    it('curried version should maintain periodicity', () => {
      const expCustom = exponentialWith(3);
      testPeriodicity(expCustom);
    });
  });
}); 