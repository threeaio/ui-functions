import { defineConfig } from 'tsup';

/**
 * tsup configuration for building the react-ui package
 * Includes support for CSS files and proper component bundling
 */
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'styles': 'src/styles/globals.css',
    'tailwind-preset': 'tailwind.config.js'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  // Add CSS handling
  loader: {
    '.css': 'copy'
  },
  // Ensure we preserve the CSS import
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    }
  },
  // Include CSS files in the bundle
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    }
  }
}); 