import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          portada: path.resolve(__dirname, 'portada.html'),
          mundo1: path.resolve(__dirname, 'mundo1-mru.html'),
          mundo2: path.resolve(__dirname, 'mundo2-mua.html'),
          mundo3: path.resolve(__dirname, 'mundo3-caida-libre.html'),
          mundo4: path.resolve(__dirname, 'mundo4-parabolico.html'),
          mundo5: path.resolve(__dirname, 'mundo5-circular.html'),
          final: path.resolve(__dirname, 'final.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
