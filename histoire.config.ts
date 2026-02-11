import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
    setupFile: '/src/histoires/setup.ts',
    plugins: [
        HstVue(),
    ],
    vite: {
        plugins: [
            vue(),
        ],
    },
})
