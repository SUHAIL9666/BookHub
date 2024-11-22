import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
=======
  server: {
    port: 3000,
    host: true,
    open: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
});
