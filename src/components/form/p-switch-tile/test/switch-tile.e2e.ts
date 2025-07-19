import { newE2EPage } from '@stencil/core/testing'

describe('switch-tile', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-switch-tile></p-switch-tile>')

        const element = await page.find('p-switch-tile')
        expect(element).toHaveClass('hydrated')
    })
})
