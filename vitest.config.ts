import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // This enables global `test`, `expect`, etc.
    environment: 'jsdom'     // This sets up a browser-like environment for React
  }
})
