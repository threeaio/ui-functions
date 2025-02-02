import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'math/index': 'src/math/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
}); 