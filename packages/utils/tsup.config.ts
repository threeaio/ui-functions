import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'math/index': 'src/math/index.ts',
    'geom/index': 'src/geom/index.ts',
    'types/index': 'src/types/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
}); 