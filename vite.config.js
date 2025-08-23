// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
  build: {
    minify: 'terser',
    terserOptions: { compress: { drop_console: true, drop_debugger: true } },
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
  server: { open: true, host: true },
  preview: { port: 8080 },
  optimizeDeps: { include: ['react', 'react-dom'] },
});
