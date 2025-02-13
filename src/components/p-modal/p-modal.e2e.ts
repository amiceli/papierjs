import { newE2EPage } from '@stencil/core/testing'

describe('p-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-modal></p-modal>')

        const element = await page.find('p-modal')
        expect(element).toHaveClass('hydrated')
    })
})
