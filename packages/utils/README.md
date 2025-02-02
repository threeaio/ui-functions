# @threeaio/utils

A collection of utility functions for common programming tasks.

## Installation

```bash
npm install @threeaio/utils
# or
yarn add @threeaio/utils
# or
pnpm add @threeaio/utils
```

## Usage

### Math Utilities

#### clamp
Clamps a value between a minimum and maximum range.
```typescript
import { clamp } from '@threeaio/utils/math';

clamp(0, 100, 50);  // returns 50
clamp(0, 100, 150); // returns 100
clamp(0, 100, -50); // returns 0
```

#### clampToUnit
Clamps a value to the range [0,1].
```typescript
import { clampToUnit } from '@threeaio/utils';

clampToUnit(0.5);  // returns 0.5
clampToUnit(1.5);  // returns 1.0
clampToUnit(-0.5); // returns 0.0
```

#### lerp
Linearly interpolates between two values.
```typescript
import { lerp } from '@threeaio/utils';

lerp(0, 10, 0);   // returns 0
lerp(0, 10, 0.5); // returns 5
lerp(0, 10, 1);   // returns 10
```

#### normalize
Normalizes a value from a given range to [0,1].
```typescript
import { normalize } from '@threeaio/utils';

normalize(0, 100, 50);  // returns 0.5
normalize(0, 100, 0);   // returns 0
normalize(0, 100, 100); // returns 1
```

#### reMap
Remaps a value from one range to another.
```typescript
import { reMap } from '@threeaio/utils';

reMap(0, 100, 0, 1, 50);  // returns 0.5
reMap(0, 100, -1, 1, 50); // returns 0
reMap(0, 10, 0, 100, 5);  // returns 50
```

#### mapToNewUnitRange
Maps a normalized value within a specified range [min, max] to a constrained value between 0 and 1.
```typescript
import { mapToNewUnitRange } from '@threeaio/utils';

mapToNewUnitRange(0.2, 0.8, 0.5); // returns 0.5
mapToNewUnitRange(0.2, 0.8, 0.2); // returns 0
mapToNewUnitRange(0.2, 0.8, 0.8); // returns 1
```

#### smoothStep
Performs smooth interpolation between 0 and 1 using a cubic Hermite curve.
```typescript
import { smoothStep } from '@threeaio/utils';

smoothStep(0);   // returns 0
smoothStep(0.5); // returns 0.5
smoothStep(1);   // returns 1
```

#### normalizedGaussian
Calculates a normalized gaussian (bell curve) value for smooth falloff effects.
```typescript
import { normalizedGaussian } from '@threeaio/utils';

normalizedGaussian(0, 1);   // returns 1.0 (maximum effect)
normalizedGaussian(0.5, 1); // returns ~0.135 (smooth falloff)
normalizedGaussian(1, 1);   // returns ~0.0 (minimal effect)
```

## Modules

### Math
Contains mathematical utility functions for common operations like clamping, interpolation, and normalization.

### Geometry
Contains geometric calculations and utilities.

#### Circle Functions
- `getSliceLengthOnCircle(r: number, height: number): number` - Calculates the length of a horizontal slice (chord) on a circle at a given height from the edge. Useful for calculating circle widths at different heights.

## API Reference

### Math

#### `clamp(rangeStart: number, rangeEnd: number, value: number): number`
Clamps a value between rangeStart and rangeEnd.

#### `clampToUnit(value: number): number`
Clamps a value to the range [0,1].

#### `lerp(a: number, b: number, t: number): number`
Linearly interpolates between two values.
- `a`: Start value
- `b`: End value
- `t`: Interpolation factor

#### `normalize(min: number, max: number, value: number): number`
Normalizes a value between a given range.
Returns 0.5 if min equals max to avoid division by zero.

#### `reMap(fromMin: number, fromMax: number, toMin: number, toMax: number, value: number): number`
Remaps a value from one range to another.
- `fromMin`: Start of the input range
- `fromMax`: End of the input range
- `toMin`: Start of the target range
- `toMax`: End of the target range
- `value`: The value to remap

#### `mapToNewUnitRange(min: number, max: number, value: number): number`
Maps a value from a specified range (between 0 and 1) to a normalized 0-1 range.
- `min`: Minimum boundary of the range (must be between 0 and 1)
- `max`: Maximum boundary of the range (must be between 0 and 1)
- `value`: The input value to normalize within the new range
Throws RangeError if min/max are not between 0 and 1 or if range is zero.

#### `smoothStep(x: number): number`
Performs smooth interpolation using a cubic Hermite curve (3x² - 2x³).
- `x`: Input value (must be between 0 and 1)
Throws Error if x is not between 0 and 1.

#### `normalizedGaussian(x: number, strength: number): number`
Calculates a normalized gaussian (bell curve) value for smooth falloff effects.
- `x`: Input value in range [0,1]
- `strength`: Maximum effect at x=0
Returns a value between 0 and strength, following gaussian decay.

## License

ISC

## Contributing

Issues and pull requests are welcome at [https://github.com/threeaio/ui-functions](https://github.com/threeaio/ui-functions).
