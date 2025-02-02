import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'animation/index': 'src/animation/index.ts',
    'examples/waveforms-bundle': 'src/animation/waveforms.ts',
    'examples/easing-bundle': 'src/animation/easing.ts'
  },
  format: ['esm'],
  dts: true,
  clean: true,
  outDir: 'dist'
}); 