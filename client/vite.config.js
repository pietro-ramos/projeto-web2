import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.API_URL, // URL do servidor backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});