import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          components: [
            './src/components/sections/Hero.jsx',
            './src/components/sections/Skills.jsx',
            './src/components/sections/Projects.jsx',
            './src/components/sections/Contact.jsx',
          ],
        },
      },
    },
    reportCompressedSize: true,
    cssCodeSplit: true,
  },
  server: {
    open: true,
    host: true,
  },
  preview: {
    port: 8080,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
