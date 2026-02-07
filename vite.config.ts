import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        features: path.resolve(__dirname, 'features.html'),
        offline: path.resolve(__dirname, 'offline.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        download: path.resolve(__dirname, 'download.html'),
        about: path.resolve(__dirname, 'about.html'),
      },
    },
  },
});
