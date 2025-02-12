import { newE2EPage } from '@stencil/core/testing'

describe('p-breadcrumb', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-breadcrumb></p-breadcrumb>')

        const element = await page.find('p-breadcrumb')
        expect(element).toHaveClass('hydrated')
    })
    it('provides dark mode', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-breadcrumb dark>
                <p-breadcrumb-item>test</p-breadcrumb-item>
            </p-breadcrumb>
        `)

        const element = await page.find('p-breadcrumb-item')
        expect(element).toHaveAttribute('dark')
    })
    it('match first breadcrumb item', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-breadcrumb dark>
                <p-breadcrumb-item>first</p-breadcrumb-item>
                <p-breadcrumb-item>second</p-breadcrumb-item>
            </p-breadcrumb>
        `)

        const elements = await page.findAll('p-breadcrumb-item')

        expect(elements.at(0)).toHaveAttribute('first')
        expect(elements.at(1)).not.toHaveAttribute('first')
    })
})
