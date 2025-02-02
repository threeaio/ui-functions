# @threeaio/utils

A collection of utility functions for common programming tasks.

## Table of Contents
- [Installation](#installation)
- [Overview](#overview)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
  - [Math Functions](#math-functions)
  - [Geometry Functions](#geometry-functions)
- [Contributing](#contributing)
- [License](#license)

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

- **Geometry**: Geometric calculations for points, lines, circles, and ellipses
  ```typescript
  import { getPointOnEllipse } from '@threeaio/utils/geom'
  ```

## Usage Examples

### Working with Lines
```typescript
// Check if two lines intersect
const line1 = createSimpleLine({ x: 0, y: 0 }, { x: 1, y: 1 });
const line2 = createSimpleLine({ x: 0, y: 1 }, { x: 1, y: 0 });
const intersects = linesIntersect(line1, line2); // true

// Generate points along a line
const points = generateLinePoints(line1, 2);
// Returns points at 1/3 and 2/3 along the line
```

### Value Manipulation
```typescript
// Clamp a value between bounds
const clamped = clamp(0, 100, 150); // returns 100

// Remap a value from one range to another
const remapped = remap(0, 1, 0, 100, 0.5); // returns 50

// Remap within unit range
const value = remapUnit(0.2, 0.8, 0.5); // maps 0.5 to 0.5 in range [0.2, 0.8]
```

## API Reference

### Math Functions

#### Value Manipulation
| Function | Description | Example |
|----------|-------------|---------|
| `clamp(rangeStart, rangeEnd, value)` | Constrains a value between min/max bounds | `clamp(0, 1, 1.5) // returns 1` |
| `clampToUnit(value)` | Constrains a value to [0,1] range | `clampToUnit(1.5) // returns 1` |
| `getRandomFloat(min, max, precision?)` | Generates a random float within a range | `getRandomFloat(1, 10, 2) // returns e.g. 5.42` |
| `normalize(min, max, value)` | Maps value from any range to [0,1] | `normalize(0, 100, 50) // returns 0.5` |
| `normalizeWithDeadZones(threshold_low, threshold_high, value)` | Maps value to [0,1] with threshold dead zones | `normalizeWithDeadZones(0.3, 0.7, 0.5) // returns 0.5` |
| `remap(fromMin, fromMax, toMin, toMax, value)` | Maps value from one range to another | `remap(0, 1, 0, 100, 0.5) // returns 50` |
| `remapUnit(min, max, value)` | Remaps a value within [0,1] to a new subrange in [0,1] | `remapUnit(0.2, 0.8, 0.5) // returns 0.5` |

#### Interpolation & Smoothing
| Function | Description | Example |
|----------|-------------|---------|
| `lerp(a, b, t)` | Linear interpolation between two values | `lerp(0, 100, 0.5) // returns 50` |
| `smoothStep(x)` | Smooth hermite interpolation | `smoothStep(0.5) // returns smoother value` |
| `normalizedGaussian(x, strength)` | Bell curve falloff calculation | `normalizedGaussian(0.5, 1) // returns falloff value` |

#### Angle Conversion
| Function | Description | Example |
|----------|-------------|---------|
| `toDegrees(radians)` | Converts radians to degrees | `toDegrees(Math.PI) // returns 180` |
| `toRadians(degrees)` | Converts degrees to radians | `toRadians(180) // returns 3.14159...` |

### Geometry Functions

#### Point & Line Operations
| Function | Description | Example |
|----------|-------------|---------|
| `createSimple2D(x, y)` | Creates a 2D point with tuple representation | `createSimple2D(1, 2)` |
| `createSimpleLine(start, end)` | Creates a line from two points | `createSimpleLine({x:0,y:0}, {x:1,y:1})` |
| `linesIntersect(line1, line2)` | Checks if two line segments intersect | `linesIntersect(line1, line2)` |
| `generateLinePoints(line, count)` | Generates evenly spaced points along a line | `generateLinePoints(line, 2)` |

#### Circle & Ellipse Operations
| Function | Description | Example |
|----------|-------------|---------|
| `getPointOnEllipse(angle, radiusX, radiusY?)` | Gets point on circle/ellipse at angle | `getPointOnEllipse(45, 10)` |
| `calculateArcLength(radius, angle)` | Computes arc length for given angle | `calculateArcLength(10, 90)` |
| `getSliceLengthOnCircle(r, height)` | Calculates chord length at given height | `getSliceLengthOnCircle(10, 5)` |

## Contributing

Issues and pull requests are welcome at [https://github.com/threeaio/ui-functions](https://github.com/threeaio/ui-functions).

## License

ISC
