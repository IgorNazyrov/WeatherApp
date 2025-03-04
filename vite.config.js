import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { default as rollUpUrl } from '@rollup/plugin-url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log('apappapa')

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    rollUpUrl({
      include: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.eot', '**/*.svg'],
      limit: Infinity,
      publicPath: '/',
    }),
  ],
  css: {
    // additionalData: `@import "${path.resolve(__dirname, 'src/styles/_mixins.scss')}";`  ,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});