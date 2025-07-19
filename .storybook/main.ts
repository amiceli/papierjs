import type { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
    stories: [
        // '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
        '../src/components/p-card/**/*.stories.tsx',
    ],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    previewHead: (head) => `
        ${head}
        <script type="module" src="/www/build/papierjs.esm.js"></script>
        <script nomodule src="/www/build/papierjs.js"></script>
    `,
    async viteFinal(cfg) {
        const { mergeConfig } = await import('vite')
        const { liveReload } = await import('vite-plugin-live-reload')
        return mergeConfig(cfg, {
            plugins: [liveReload(['www/build/papierjs.esm.js', 'www/build/papierjs.js'])],
        })
    },
}
export default config
