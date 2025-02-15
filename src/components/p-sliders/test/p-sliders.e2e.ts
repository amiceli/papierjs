import { newE2EPage } from '@stencil/core/testing'

describe('p-sliders', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-sliders></p-sliders>')

        const element = await page.find('p-sliders')
        expect(element).toHaveClass('hydrated')
    })
})
