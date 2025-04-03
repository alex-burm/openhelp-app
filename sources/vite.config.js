import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig({
    plugins: [vue(), vueDevTools()],
    root: 'assets',
    server: {
        port: 5177,
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('development')
    },
    build: {
        sourcemap: true,
        outDir: '../public/build',
        emptyOutDir: false,
        lib: {
            entry: {
                'public-chat': 'assets/public-chat/index.js'
            },
            formats: ['es'],

        },
        rollupOptions: {
            input: {
                'public-chat': 'assets/public-chat/index.js',
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]'
            }
        }
    },
    resolve: {
        alias: [
            {
                find: '@public',
                replacement: path.resolve(__dirname, 'assets/public-chat')
            },

            // {
            //     find: '@admin',
            //     replacement: path.resolve(__dirname, 'assets/admin-chat/src')
            // }
        ]
    }

})
