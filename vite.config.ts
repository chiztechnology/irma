import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,          // Allows 0.0.0.0
    port: 4173,          // any port Render will override it with $PORT
    allowedHosts: ['irma-i8dr.onrender.com'],  // <--- ADD THIS
  }
})
