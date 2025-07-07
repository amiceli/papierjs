import type { StorybookConfig } from '@storybook/html-vite'

console.log('init : ', process.env.ALLOWED_HOST)

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
    framework: {
        name: '@stencil/storybook-plugin',
        options: {},
    },
    viteFinal(config) {
        config.server ??= {}
        config.server.allowedHosts = ['localhost', process.env.ALLOWED_HOST ?? '']

        console.log('vite config : ', config.server.allowedHosts)

        return config
    },
}
export default config
