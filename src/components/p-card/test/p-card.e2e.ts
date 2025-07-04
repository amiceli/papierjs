import { newE2EPage } from '@stencil/core/testing'

describe('p-card', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-card></p-card>')

        const element = await page.find('p-card')
        expect(element).toHaveClass('hydrated')
    })
})
