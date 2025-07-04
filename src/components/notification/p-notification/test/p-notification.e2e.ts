import { newE2EPage } from '@stencil/core/testing'

describe('p-notification', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-notification></p-notification>')

        const element = await page.find('p-notification')
        expect(element).toHaveClass('hydrated')
    })
    it('should use primary type by default', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-notification></p-notification>')

        const element = await page.find('p-notification')
        const notf = element.shadowRoot.querySelector('.alert')

        expect(element).toHaveClass('hydrated')
        expect(notf).toHaveClass('alert-primary')
    })
    it('can allow types', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-notification type="success"></p-notification>')

        const element = await page.find('p-notification')
        const notf = element.shadowRoot.querySelector('.alert')

        expect(element).toHaveClass('hydrated')
        expect(notf).toHaveClass('alert-success')
    })
})
