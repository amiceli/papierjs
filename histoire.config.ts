import path from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
    setupFile: 'histoire/setup.ts',
    outDir: 'histoire-dist',
    plugins: [
        HstVue(),
    ],
    vite: {
        base: process.env.GITHUB_ACTIONS ? '/papierjs/' : '/',
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@h': path.resolve(__dirname, `./histoire`),
                '@': path.resolve(__dirname, `./src`),
            },
        },
    },
})
