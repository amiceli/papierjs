import type { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { inlineSvg } from 'stencil-inline-svg'

require('dotenv').config()

export const config: Config = {
    plugins: [
        sass({
            includePaths: [
                'node_modules',
            ],
        }),
        inlineSvg(),
    ],
    tsconfig: 'tsconfig.stencil.json',
    namespace: 'papierjs',
    extras: {
        enableImportInjection: true,
    },
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
            dependencies: false,
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    testing: {
        browserHeadless: 'shell',
        browserExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    },
}
