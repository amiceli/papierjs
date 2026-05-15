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

    describe('dark mode controller', () => {
        it('applies is--dark when dark="true"', async () => {
            const page = await newE2EPage()
            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.setContent('<p-tabs dark="true"></p-tabs>')

            const inner = await page.find('p-tabs >>> .papier')

            expect(inner).toHaveClass('is--dark')
        })

        it('does not apply is--dark when dark="false"', async () => {
            const page = await newE2EPage()
            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'dark',
                },
            ])
            await page.setContent('<p-tabs></p-tabs>')

            await page.$eval(
                'p-tabs',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-tabs >>> .papier')

            expect(inner).not.toHaveClass('is--dark')
        })

        it('falls back to prefers-color-scheme when dark prop is not set', async () => {
            const page = await newE2EPage()
            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'dark',
                },
            ])
            await page.setContent('<p-tabs></p-tabs>')

            const darkInner = await page.find('p-tabs >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-tabs >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
