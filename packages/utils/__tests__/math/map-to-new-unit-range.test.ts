import { mapToNewUnitRange } from "../../src/math/map-to-new-unit-range";

describe("mapToNewUnitRange", () => {
  it("should correctly map values within the specified range", () => {
    expect(mapToNewUnitRange(0.2, 0.8, 0.5)).toBeCloseTo(0.5);
    expect(mapToNewUnitRange(0.2, 0.8, 0.2)).toBeCloseTo(0);
    expect(mapToNewUnitRange(0.2, 0.8, 0.8)).toBeCloseTo(1);
  });

  it("should clamp values outside the range to 0 or 1", () => {
    expect(mapToNewUnitRange(0.2, 0.8, 0.1)).toBe(0);
    expect(mapToNewUnitRange(0.2, 0.8, 0.9)).toBe(1);
  });

  it("should throw error for invalid range values", () => {
    expect(() => mapToNewUnitRange(-0.1, 0.5, 0.3)).toThrow(RangeError);
    expect(() => mapToNewUnitRange(0.2, 1.1, 0.3)).toThrow(RangeError);
  });

  it("should throw error when range is zero", () => {
    expect(() => mapToNewUnitRange(0.5, 0.5, 0.3)).toThrow(RangeError);
  });
}); 