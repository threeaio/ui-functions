/**
 * Clamps a value between rangeStart and rangeEnd.
 * @param rangeStart Range start.
 * @param rangeEnd Range end.
 * @param value The value to clamp inside the range.
 * @returns The clamped value.
 */
export const clamp = (rangeStart: number, rangeEnd: number, value: number) => {
    const _min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
    const _max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
    return Math.min(Math.max(_min, value), _max);
  };