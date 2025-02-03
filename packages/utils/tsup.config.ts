import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'math/index': 'src/math/index.ts',
    'geom/index': 'src/geom/index.ts',
    'structures/index': 'src/structures/index.ts',
    'animation/index': 'src/animation/index.ts',
    'types/index': 'src/types/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true
}); 