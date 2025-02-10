import { newE2EPage } from '@stencil/core/testing'

describe('p-dropdown', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-dropdown></p-dropdown>')

        const element = await page.find('p-dropdown')
        expect(element).toHaveClass('hydrated')
    })
    it('handles outside click', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <h1>Outside</h1>
            <p-dropdown></p-dropdown>
        `)

        const header = await page.find('p-dropdown >>> .dropdown__header')
        const h1 = await page.find('h1')

        await header.click()
        await page.waitForChanges()

        const open = await page.find('p-dropdown >>> .dropdown')

        expect(open.classList.contains('is--open')).toBeTruthy()

        await h1.click()
        await page.waitForChanges()

        expect(open.classList.contains('is--open')).toBeFalsy()
    })
})
