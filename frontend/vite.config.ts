import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://ws1.csie.ntu.edu.tw:52680",
        changeOrigin: true,
      },
    },
  },
})
