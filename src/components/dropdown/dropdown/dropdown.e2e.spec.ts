import { newE2EPage } from '@stencil/core/testing'

describe('p-dropdown', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-dropdown></p-dropdown>')

        const element = await page.find('p-dropdown')
        expect(element).toHaveClass('hydrated')
    })
    it('display placeholder', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-dropdown placeholder="awesome">
                <p-dropdown-item>Item 1</p-dropdown-item>
            </p-dropdown-i>
        `)

        const header = await page.find('p-dropdown >>> .dropdown__header')

        expect(header.textContent).toEqual('awesome')
    })
    it('display selected item label', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-dropdown placeholder="awesome">
                <p-dropdown-item>Item 1</p-dropdown-item>
                <p-dropdown-item selected>Item 2</p-dropdown-item>
            </p-dropdown-i>
        `)

        const header = await page.find('p-dropdown >>> .dropdown__header')

        expect(header.textContent).toEqual('Item 2')
    })
})
