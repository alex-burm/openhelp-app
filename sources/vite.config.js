import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    root: 'assets',
    server: {
        port: 5177,
    },
    build: {
        outDir: '../public/build',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                'public-chat': 'assets/public-chat/index.js',
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]'
            }
        }
    }
})
