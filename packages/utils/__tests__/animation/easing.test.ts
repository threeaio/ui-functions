import { 
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo
} from '../../src/animation/easing';

describe('easing functions', () => {
  // Helper function to test boundary conditions
  const testBoundaries = (easingFn: (x: number) => number) => {
    expect(easingFn(0)).toBe(0);
    expect(easingFn(1)).toBe(1);
  };

  describe('easeInQuad', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInQuad);
    });

    it('should follow quadratic curve', () => {
      expect(easeInQuad(0.5)).toBeCloseTo(0.25, 10);
      expect(easeInQuad(0.8)).toBeCloseTo(0.64, 10);
    });
  });

  describe('easeOutQuad', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeOutQuad);
    });

    it('should follow inverse quadratic curve', () => {
      expect(easeOutQuad(0.5)).toBeCloseTo(0.75, 10);
      expect(easeOutQuad(0.2)).toBeCloseTo(0.36, 10);
    });
  });

  describe('easeInOutQuad', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInOutQuad);
    });

    it('should be symmetric around 0.5', () => {
      expect(easeInOutQuad(0.3)).toBeCloseTo(1 - easeInOutQuad(0.7), 10);
      expect(easeInOutQuad(0.1)).toBeCloseTo(1 - easeInOutQuad(0.9), 10);
    });

    it('should return 0.5 at x = 0.5', () => {
      expect(easeInOutQuad(0.5)).toBe(0.5);
    });
  });

  describe('easeInCubic', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInCubic);
    });

    it('should follow cubic curve', () => {
      expect(easeInCubic(0.5)).toBeCloseTo(0.125, 10);
      expect(easeInCubic(0.8)).toBeCloseTo(0.512, 10);
    });
  });

  describe('easeOutCubic', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeOutCubic);
    });

    it('should follow inverse cubic curve', () => {
      expect(easeOutCubic(0.5)).toBeCloseTo(0.875, 10);
      expect(easeOutCubic(0.2)).toBeCloseTo(0.488, 10);
    });
  });

  describe('easeInOutCubic', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInOutCubic);
    });

    it('should be symmetric around 0.5', () => {
      expect(easeInOutCubic(0.3)).toBeCloseTo(1 - easeInOutCubic(0.7), 10);
      expect(easeInOutCubic(0.1)).toBeCloseTo(1 - easeInOutCubic(0.9), 10);
    });

    it('should return 0.5 at x = 0.5', () => {
      expect(easeInOutCubic(0.5)).toBe(0.5);
    });
  });

  describe('easeInExpo', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInExpo);
    });

    it('should follow exponential curve', () => {
      expect(easeInExpo(0.5)).toBeCloseTo(0.03125, 5);
      expect(easeInExpo(0.7)).toBeCloseTo(0.125, 5);
    });
  });

  describe('easeOutExpo', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeOutExpo);
    });

    it('should follow inverse exponential curve', () => {
      expect(easeOutExpo(0.3)).toBeCloseTo(0.875, 5);
      expect(easeOutExpo(0.5)).toBeCloseTo(0.96875, 5);
    });
  });

  describe('easeInOutExpo', () => {
    it('should handle boundary conditions', () => {
      testBoundaries(easeInOutExpo);
    });

    it('should be symmetric around 0.5', () => {
      expect(easeInOutExpo(0.3)).toBeCloseTo(1 - easeInOutExpo(0.7), 10);
      expect(easeInOutExpo(0.1)).toBeCloseTo(1 - easeInOutExpo(0.9), 10);
    });

    it('should return 0.5 at x = 0.5', () => {
      expect(easeInOutExpo(0.5)).toBe(0.5);
    });
  });
}); 