import { newE2EPage } from '@stencil/core/testing'

describe('p-switch', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-switch></p-switch>')

        const element = await page.find('p-switch')
        expect(element).toHaveClass('hydrated')
    })
})
