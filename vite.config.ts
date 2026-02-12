import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
