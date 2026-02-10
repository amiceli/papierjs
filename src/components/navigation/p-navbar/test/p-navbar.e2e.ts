import { newE2EPage } from '@stencil/core/testing'

describe('p-navbar', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-navbar></p-navbar>')

        const element = await page.find('p-navbar')
        expect(element).toHaveClass('hydrated')
    })
})
