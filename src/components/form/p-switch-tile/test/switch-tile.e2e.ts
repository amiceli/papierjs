import { newE2EPage } from '@stencil/core/testing'

describe('switch-tile', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-switch-tile></p-switch-tile>')

        const element = await page.find('p-switch-tile')
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
            await page.setContent('<p-switch-tile dark="true"></p-switch-tile>')

            const inner = await page.find('p-switch-tile >>> .papier')

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
            await page.setContent('<p-switch-tile></p-switch-tile>')

            await page.$eval(
                'p-switch-tile',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-switch-tile >>> .papier')

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
            await page.setContent('<p-switch-tile></p-switch-tile>')

            const darkInner = await page.find('p-switch-tile >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-switch-tile >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
