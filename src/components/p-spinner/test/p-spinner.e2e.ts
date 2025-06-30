import { newE2EPage } from '@stencil/core/testing'

describe('p-spinner', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-spinner></p-spinner>')

        const element = await page.find('p-spinner')
        expect(element).toHaveClass('hydrated')
    })
})
