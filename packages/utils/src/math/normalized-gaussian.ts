/**
 * Calculates a normalized gaussian (bell curve) value for smooth falloff effects.
 * The function is normalized to work in the [0,1] range, with maximum effect at x=0
 * and smooth decay towards x=1.
 *
 * @param x - Input value in range [0,1]
 * @param strength - Maximum effect at x=0
 * @returns Value between 0 and strength, following gaussian decay
 */
export const normalizedGaussian = (x: number, strength: number): number => {
  const normalizedX = x * 4;
  return strength * Math.exp(-(normalizedX * normalizedX) / 2);
}; 