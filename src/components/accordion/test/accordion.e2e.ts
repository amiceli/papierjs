import { newE2EPage } from '@stencil/core/testing'

describe('p-accordion', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-accordion tutle="test"></p-accordion>')

        const element = await page.find('p-accordion')
        expect(element).toHaveClass('hydrated')
    })
    it('should be close by default', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-accordion title="test">content</p-accordion>
        `)
        const summary = await page.find('p-accordion >>> .p-accordion__summary')
        const content = await page.find('p-accordion >>> .p-accordion__content')

        expect(summary.textContent).toContain('test')
        expect(content).not.toHaveClass('is--open')
    })
    it('can be open', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-accordion open title="test">content</p-accordion>
        `)
        const content = await page.find('p-accordion >>> .p-accordion__content')

        expect(content).toHaveClass('is--open')
    })
})
