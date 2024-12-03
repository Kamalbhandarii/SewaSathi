import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Vite config to use React and Tailwind
export default defineConfig({
  plugins: [react()],
})
