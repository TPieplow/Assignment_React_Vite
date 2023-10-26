import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1000
  },
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#images': path.resolve(__dirname, 'src/assets/images'),
      '#button': path.resolve(__dirname, 'src/generics/button'),
      '#sectiontitle': path.resolve(__dirname, 'src/generics/SectionTitle')
    }
  }
});
