import { newE2EPage } from '@stencil/core/testing'

describe('p-badge', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-badge></p-badge>')

        const element = await page.find('p-badge')
        expect(element).toHaveClass('hydrated')
    })
    it('provides dark mode', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-badge dark></p-badge>')

        const element = await page.find('p-badge >>> .papier')
        expect(element.classList.contains('is--dark')).toBeTruthy()
    })
    it('inherit font size from parent', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <div style="font-size : 99px">
                <p-badge dark></p-badge>
            </div>
        `)

        const element = await page.find('p-badge >>> .papier')
        const style = await element.getComputedStyle()
        expect(style.fontSize).toEqual('99px')
    })
})
