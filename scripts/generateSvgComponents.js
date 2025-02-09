const fs = require('node:fs/promises')
const getDirName = require('node:path').dirname
const { optimize } = require('svgo')
const SVG_FOLDER = 'assets/icons'

const toPascalCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase())

async function listIconFolders() {
    const path = 'src/components/icons/'

    const dirs = await fs.readdir(path)
    const onlyDir = []

    for await (const dir of dirs) {
        const dirPath = `${path}/${dir}`
        const res = await fs.lstat(dirPath)

        if (res.isDirectory()) {
            onlyDir.push(dir)
        }
    }

    return onlyDir
}

const getTemplateSvg = (iconPath, iconName) => {
    return `
        import { Component, Prop, h, Element } from '@stencil/core';
        import svgIcon from '../../../${SVG_FOLDER}/${iconPath}';

        @Component({
            tag: 'p-icon-${iconName}',
            styleUrl: '../icon.css',
            shadow: true,
        })
        export class LsiIcon${toPascalCase(iconName)} {

            @Prop() size: string = '24';
            @Element() el: HTMLElement

            public render () {
                return (
                    <div
                        class="p-icon p-icon-${iconName}"
                        style={{ 'height': this.size + "px", 'width': this.size + "px" }}
                        innerHTML={svgIcon}
                    ></div>
                )
            }
        }
    `
}

const optimizeSvg = async () => {
    const files = await fs.readdir('./src/assets/icons')

    await Promise.all(
        files.map(async (file) => {
            const path = `./src/assets/icons/${file}`
            const content = await fs.readFile(path)
            const optimized = optimize(content.toString(), {
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                removeViewBox: false,
                                removeUselessStrokeAndFill: {
                                    stroke: true,
                                    fill: true,
                                },
                            },
                        },
                    },
                ],
            })

            fs.writeFile(path, optimized.data)
        }),
    )
}

const writeFile = async (path, content) => {
    return fs
        .mkdir(getDirName(path), { recursive: true })
        .then(() => {
            fs.writeFile(path, content.toString())
            return Promise.resolve()
        })
        .catch((e) => {
            console.error('failed mkdir')
            return Promise.reject(e)
        })
}

const generateSvgComponent = async () => {
    try {
        const files = await fs.readdir(`./src/${SVG_FOLDER}`)

        await Promise.all(
            files.map((file) => {
                const iconName = file.replace('.svg', '')
                const folder = 'icons'
                const template = getTemplateSvg(file, iconName)
                const path = `./src/components/${folder}/icon-${iconName}/icon-${iconName}.tsx`

                return writeFile(path, template)
            }),
        )

        return Promise.resolve()
    } catch (e) {
        return Promise.reject(e)
    }
}

const cleanComponents = async () => {
    const files = await fs.readdir('src/components/icons')

    await Promise.all(
        files
            .filter((f) => !['icon.css', '.gitkeep'].includes(f))
            .map((f) => {
                console.info(`🤘🏻 src/components/icons/${f} removed`)

                return fs.rm(`src/components/icons/${f}`, {
                    recursive: true,
                })
            }),
    )
}

cleanComponents()
    .then(async () => {
        console.info('🤘🏻 src/components/ folder cleaned')

        await optimizeSvg()
        console.info('🤘🏻 all svg optimized')

        await generateSvgComponent()
        console.info('🤘🏻 all svg components generated')

        const dirs = await listIconFolders()
    })
    .catch((e) => {
        console.info(`💩 script failed, ${e}`)
    })
