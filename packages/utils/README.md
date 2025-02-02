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
import { clamp } from '@threeaio/utils';

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

## License

ISC

## Contributing

Issues and pull requests are welcome at [https://github.com/threeaio/ui-functions](https://github.com/threeaio/ui-functions).
