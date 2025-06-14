import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/plane_demo/', // Replace 'planes' with your repository name
  build: {
    sourcemap: true,
    minify: 'terser',
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['@chakra-ui/react', 'framer-motion']
  }
})