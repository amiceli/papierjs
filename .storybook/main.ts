import type { StorybookConfig } from '@storybook/html-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-docs',
            options: {
                transcludeMarkdown: true,
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    staticDirs: ['../public'],
}
export default config
