/**
 * Normalizes a value between a given range.
 * @param min Minimum range value.
 * @param max Maximum range value.
 * @param value The value to normalize.
 * @returns The normalized value.
 * @throws RangeError if the range is zero.
 */
export const normalize = (min, max, value) => {
    if (max - min === 0)
        return 0.5;
    return (value - min) / (max - min);
};
//# sourceMappingURL=normalize.js.map