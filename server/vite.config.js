import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL do servidor backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});