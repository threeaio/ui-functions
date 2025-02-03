import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'oscillator-demo': 'src/oscillator/oscillator-demo.ts'
  },
  format: ['iife'],
  globalName: 'OscillatorDemo',
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  watch: process.env.WATCH === 'true',
  outDir: 'public/js',
  onSuccess: process.env.WATCH === 'true' 
    ? 'echo "Build successful - watching for changes..."'
    : undefined
}); 