import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        about: resolve(__dirname, 'about.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
      },
    },
  },
})