import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    staticDirs: ['../public'],
}
export default config
