import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // if env is production, set base to /portfolio/
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',

  server: {
    port: 3000,
  },
})
