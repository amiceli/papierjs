import { newE2EPage } from '@stencil/core/testing'

describe('p-notification-handler', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent(
            '<p-notification-handler></p-notification-handler>',
        )

        const element = await page.find('p-notification-handler')
        expect(element).toHaveClass('hydrated')
    })
})
