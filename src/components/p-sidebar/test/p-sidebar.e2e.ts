import { newE2EPage } from '@stencil/core/testing'

describe('p-sidebar', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-sidebar></p-sidebar>')

        const element = await page.find('p-sidebar')
        expect(element).toHaveClass('hydrated')
    })
})
