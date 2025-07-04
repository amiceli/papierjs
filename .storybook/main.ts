import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
    framework: {
        name: '@stencil/storybook-plugin',
        options: {},
    },
}
export default config
