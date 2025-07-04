const fs = require('node:fs')
const path = require('node:path')

const inputDir = 'node_modules/pixelarticons/svg'
const output = 'src/components/p-icon/icons.ts'

const files = fs.readdirSync(inputDir).filter((f) => f.endsWith('.svg'))

const entries = files.map((f) => {
    const name = path.basename(f, '.svg')
    const content = fs
        .readFileSync(path.join(inputDir, f), 'utf8')
        .replace(/\r?\n|\t/g, ' ')
        .replace(/"/g, `'`)
        .replace(/>[\s]+</g, '><')
    return `  "${name}": "${content}"`
})

fs.writeFileSync(output, `export const icons: Record<string, string> = {\n${entries.join(',\n')}\n}\n`)

console.info('action=copy_svg, status=success')
