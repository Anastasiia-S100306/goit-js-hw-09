import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/1-gallery.html'),
        form: resolve(__dirname, 'src/2-form.html'),
      },
    },
    outDir: '../dist',
  },
  server: {
    // Це допоможе Vite краще орієнтуватися в папці src
    open: '/index.html'
  }
});