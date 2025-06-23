import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // This ensures that on refresh, all unknown routes go to index.html
    fs: {
      allow: ['..'],
    },
    historyApiFallback: true
  }
})
