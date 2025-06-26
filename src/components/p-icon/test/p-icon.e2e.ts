import { newE2EPage } from '@stencil/core/testing'

describe('p-icon', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-icon></p-icon>')

        const element = await page.find('p-icon')
        expect(element).toHaveClass('hydrated')
    })
})
