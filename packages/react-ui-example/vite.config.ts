import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@threeaio/react-ui': resolve(__dirname, '../react-ui/src/index.ts'),
    },
  },
}); 