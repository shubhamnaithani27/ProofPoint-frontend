import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//     port: 3000,
//   },
// });

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Make sure it's pointing to the correct 'src' directory
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});