import { newE2EPage } from '@stencil/core/testing'

describe('p-tab', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tab></p-tab>')

        const element = await page.find('p-tab')
        const selected = await page.find('p-tab >>> .is--selected')

        expect(selected).toBeNull()
        expect(element).toHaveClass('hydrated')
    })
    it('can be selected', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-tab selected></p-tab>')

        const element = await page.find('p-tab')
        const selected = await page.find('p-tab >>> .is--selected')

        expect(selected).not.toBeNull()
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
            await page.setContent('<p-tab dark="true"></p-tab>')

            const inner = await page.find('p-tab >>> .papier')

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
            await page.setContent('<p-tab></p-tab>')

            await page.$eval(
                'p-tab',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-tab >>> .papier')

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
            await page.setContent('<p-tab></p-tab>')

            const darkInner = await page.find('p-tab >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-tab >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
