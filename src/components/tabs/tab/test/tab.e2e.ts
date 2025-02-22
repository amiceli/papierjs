import { newE2EPage } from '@stencil/core/testing'

describe('p-tab', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tab></p-tab>')

        const element = await page.find('p-tab')
        const selected = await page.find('p-tab >>> .is--selected')

        expect(selected).toBeNull()
        expect(element).toHaveClass('hydrated')
    })
    it('can be selected', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tab selected></p-tab>')

        const element = await page.find('p-tab')
        const selected = await page.find('p-tab >>> .is--selected')

        expect(selected).not.toBeNull()
        expect(element).toHaveClass('hydrated')
    })
})
