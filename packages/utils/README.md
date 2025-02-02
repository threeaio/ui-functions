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

## Overview

The library provides utility functions in the following categories:

- **Math**: Common mathematical operations like interpolation, normalization, and clamping
  ```typescript
  import { clamp } from '@threeaio/utils/math'
  ```

- **Geometry**: Geometric calculations for circles, ellipses, and other shapes
  ```typescript
  import { getPointOnEllipse } from '@threeaio/utils/geom'
  ```

## Function Reference

### Math Utilities

#### Value Manipulation
| Function | Description |
|----------|-------------|
| `clamp` | Constrains a value between min/max bounds |
| `clampToUnit` | Constrains a value to [0,1] range |
| `normalize` | Maps value from a range to [0,1] |
| `normalizeWithDeadZones` | Maps value to [0,1] with threshold dead zones |
| `reMap` | Maps value from one range to another |

#### Interpolation
| Function | Description |
|----------|-------------|
| `lerp` | Linear interpolation between two values |
| `smoothStep` | Smooth hermite interpolation |
| `normalizedGaussian` | Bell curve falloff calculation |
| `mapToNewUnitRange` | Maps normalized value to new [0,1] subrange |

#### Angle Conversion
| Function | Description |
|----------|-------------|
| `toDegrees` | Converts radians to degrees |
| `toRadians` | Converts degrees to radians |

### Geometry Utilities

#### Circle Operations
| Function | Description |
|----------|-------------|
| `getSliceLengthOnCircle` | Calculates chord length at given height |
| `calculateArcLength` | Computes arc length for given angle |
| `getAngleFromArcLengthInDegrees` | Converts arc length to angle |
| `getPointOnEllipse` | Gets point on circle/ellipse at angle |

## API Reference

### Math Functions

```typescript
clamp(rangeStart: number, rangeEnd: number, value: number): number
clampToUnit(value: number): number
lerp(a: number, b: number, t: number): number
normalize(min: number, max: number, value: number): number
reMap(fromMin: number, fromMax: number, toMin: number, toMax: number, value: number): number
mapToNewUnitRange(min: number, max: number, value: number): number
smoothStep(x: number): number
normalizedGaussian(x: number, strength: number): number
toDegrees(radians: number): number
toRadians(degrees: number): number
normalizeWithDeadZones(threshold_low: number, threshold_high: number, value: number): number
```

### Geometry Functions

```typescript
getSliceLengthOnCircle(r: number, height: number): number
getPointOnEllipse(angle: number, radiusX: number, radiusY?: number): Simple2D
calculateArcLength(radius: number, angle: number): number
getAngleFromArcLengthInDegrees(arcLength: number, radius: number): number
```

## License

ISC

## Contributing

Issues and pull requests are welcome at [https://github.com/threeaio/ui-functions](https://github.com/threeaio/ui-functions).
