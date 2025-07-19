import { newE2EPage } from '@stencil/core/testing'

describe('p-tabs', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tabs></p-tabs>')

        const element = await page.find('p-tabs')
        expect(element).toHaveClass('hydrated')
    })
    it('should select first tab', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-tabs>
                <p-tab title="Awesome">Awesome</p-tab>
                <p-tab title="Check">Check</p-tab>
            </p-tabs>
        `)
        await page.waitForChanges()

        const element = await page.find('p-tabs')
        const tab = await element.find('p-tab')
        const nextTab = await element.find('p-tab + p-tab')
        const isSelected = await tab.getProperty('selected')
        const nextTabSelected = await nextTab.getProperty('selected')

        expect(isSelected).toBeTruthy()
        expect(nextTabSelected).toBeFalsy()
        expect(element).toHaveClass('hydrated')
    })
})
