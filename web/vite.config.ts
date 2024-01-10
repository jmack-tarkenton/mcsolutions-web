import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url';
import express from './express-plugin';
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    }
  },
  plugins: [react()],
})
