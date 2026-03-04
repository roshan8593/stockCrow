import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@landing": path.resolve(__dirname, "src/landingpage/products"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
})
