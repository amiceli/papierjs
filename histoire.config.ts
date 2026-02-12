import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
    setupFile: '.histoire/setup.ts',
    plugins: [
        HstVue(),
    ],
    vite: {
        plugins: [
            vue(),
        ],
    },
})
