import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/provisions-dashboard/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5175,
    allowedHosts: true,
    hmr: false,
    watch: {
      ignored: ['**/dist/**', '**/.git/**'],
    },
  },
  preview: {
    host: true,
    port: 5175,
    allowedHosts: true,
  },
})
