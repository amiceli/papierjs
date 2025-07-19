import { newE2EPage } from '@stencil/core/testing'

describe('p-tooltip', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip></p-tooltip>')

        const element = await page.find('p-tooltip')
        expect(element).toHaveClass('hydrated')
    })
    it('can be left tooltip', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip left title="awesome"></p-tooltip>')

        const element = await page.find('p-tooltip >>> .papier div')

        expect(element).toEqualAttribute('popover-left', 'awesome')
        expect(element).not.toHaveAttribute('popover-right')
    })
    it('can be bottom tooltip', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip bottom title="awesome"></p-tooltip>')

        const element = await page.find('p-tooltip >>> .papier div')

        expect(element).toEqualAttribute('popover-bottom', 'awesome')
        expect(element).not.toHaveAttribute('popover-right')
    })
    it('can be top tooltip', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip top title="awesome"></p-tooltip>')

        const element = await page.find('p-tooltip >>> .papier div')

        expect(element).toEqualAttribute('popover-top', 'awesome')
        expect(element).not.toHaveAttribute('popover-right')
    })
    it('can be right tooltip', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip right title="awesome"></p-tooltip>')

        const element = await page.find('p-tooltip >>> .papier div')

        expect(element).toEqualAttribute('popover-right', 'awesome')
        expect(element).not.toHaveAttribute('popover-bottom')
    })
    it('can be disabled tooltip', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tooltip right disabled title="awesome"></p-tooltip>')

        const element = await page.find('p-tooltip >>> .papier div')

        expect(element).not.toHaveAttribute('popover-bottom')
        expect(element).not.toHaveAttribute('popover-right')
    })
})
