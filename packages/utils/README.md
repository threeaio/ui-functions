# @threeaio/utils

A collection of utility functions for common programming tasks.

## Table of Contents
- [Installation](#installation)
- [Overview](#overview)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
  - [Math Functions](#math-functions)
  - [Geometry Functions](#geometry-functions)
  - [Structure Functions](#structure-functions)
  - [Animation Functions](#animation-functions)
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

- **Structures**: Array and object manipulation utilities
  ```typescript
  import { moveInArray, getObjectKeys } from '@threeaio/utils/structures'
  ```

- **Animation**: Easing functions for smooth animations
  ```typescript
  import { easeInOutQuad } from '@threeaio/utils/animation'
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

### Animation Easing
```typescript
// Use easing functions for smooth animations
const progress = 0.5;
const eased = easeInOutQuad(progress); // Smooth acceleration and deceleration
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
| `createSimple2D(x, y)` | Creates a 2D point with tuple representation | `createSimple2D(1, 2) // returns { x: 1, y: 2, tuple: [1, 2] }` |
| `createSimpleLine(start, end)` | Creates a line from two points | `createSimpleLine({x:0,y:0}, {x:1,y:1}) // returns [Point2D, Point2D]` |
| `lerpPoints(start, end, t)` | Linearly interpolates between two points | `lerpPoints({x:0,y:0}, {x:10,y:10}, 0.5) // returns { x:5, y:5, tuple: [5, 5] }` |
| `linesIntersect(line1, line2)` | Checks if two line segments intersect | `linesIntersect(line1, line2) // returns boolean` |
| `generateLinePoints(line, count)` | Generates evenly spaced points along a line | `generateLinePoints(line, 2) // returns Array<{ x: number, y: number, tuple: [number, number] }>` |

#### Circle & Ellipse Operations
| Function | Description | Example |
|----------|-------------|---------|
| `getPointOnEllipse(angle, radiusX, radiusY?)` | Gets point on circle/ellipse at angle | `getPointOnEllipse(45, 10) // returns { x: number, y: number }` |
| `calculateArcLength(radius, angle)` | Computes arc length for given angle | `calculateArcLength(10, 90) // returns number (≈15.7079632...)` |
| `getSliceLengthOnCircle(r, height)` | Calculates chord length at given height | `getSliceLengthOnCircle(10, 5) // returns number (≈8.6602540...)` |

### Structure Functions

#### Array Operations
| Function | Description | Example |
|----------|-------------|---------|
| `createArrayFromLength(length)` | Creates array of numbers from 0 to length-1 | `createArrayFromLength(3) // [0,1,2]` |
| `insertInArray(array, element, index)` | Inserts element at specified index | `insertInArray([1,2], 3, 1) // [1,3,2]` |
| `moveInArray(array, from, to)` | Moves element from one index to another | `moveInArray([1,2,3], 0, 2) // [2,3,1]` |

#### Object Operations
| Function | Description | Example |
|----------|-------------|---------|
| `getObjectKeys(obj)` | Gets typed keys of an object | `getObjectKeys({a:1, b:2}) // ['a','b']` |

### Animation Functions

#### Easing Functions
All easing functions take a progress value between 0 and 1 and return an eased value between 0 and 1.

| Function | Description | Use Case |
|----------|-------------|----------|
| `easeInQuad(x)` | Quadratic ease in | Gradual acceleration |
| `easeOutQuad(x)` | Quadratic ease out | Gradual deceleration |
| `easeInOutQuad(x)` | Quadratic ease in/out | Smooth acceleration and deceleration |
| `easeInCubic(x)` | Cubic ease in | Stronger acceleration |
| `easeOutCubic(x)` | Cubic ease out | Stronger deceleration |
| `easeInOutCubic(x)` | Cubic ease in/out | Stronger smooth acceleration/deceleration |
| `easeInExpo(x)` | Exponential ease in | Sharp acceleration |
| `easeOutExpo(x)` | Exponential ease out | Sharp deceleration |
| `easeInOutExpo(x)` | Exponential ease in/out | Sharp acceleration/deceleration |

#### Waveform Functions
All waveform functions take an input value (typically time) and return a value between 0 and 1. They are useful for creating periodic animations and oscillations.

| Function | Description | Parameters |
|----------|-------------|------------|
| `sine(x)` | Smooth sinusoidal oscillation | - |
| `triangle(x)` | Linear triangular wave pattern | - |
| `sawtooth(x)` | Linear increasing pattern that resets | - |
| `square(x, dutyCycle?)` | Alternates between 0 and 1 | `dutyCycle`: Percentage of "on" time (0-1, default: 0.5) |
| `bounce(x, bounces?)` | Bouncing ball effect | `bounces`: Number of bounces (default: 3) |
| `pulse(x, width?)` | Smooth pulse wave | `width`: Width of pulse (0-1, default: 0.5) |
| `elastic(x, amplitude?, frequency?)` | Spring-like oscillation | `amplitude`: Bounce height (default: 1)`frequency`: Bounce frequency (default: 3) |
| `noise(x, seed?)` | Pseudo-random variation | `seed`: Random seed value (default: 1) |
| `stepped(x, steps?)` | Quantized step pattern | `steps`: Number of discrete steps (default: 4) |
| `circular(x)` | Circular easing pattern | - |
| `exponential(x, base?)` | Exponential growth pattern | `base`: Growth rate (default: 2) |

```typescript
// Example usage of waveforms
import { sine, bounce } from '@threeaio/utils/animation/waveforms';

// Smooth oscillation
const value1 = sine(time); // Returns value between 0 and 1

// Bouncing effect
const value2 = bounce(time, 5); // 5 bounces
```

## Contributing

Issues and pull requests are welcome at [https://github.com/threeaio/ui-functions](https://github.com/threeaio/ui-functions).

## License

ISC
