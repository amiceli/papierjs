import { newE2EPage } from '@stencil/core/testing'

describe('p-card', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-card></p-card>')

        const element = await page.find('p-card')
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
            await page.setContent('<p-card dark="true"></p-card>')

            const inner = await page.find('p-card >>> .papier')

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
            await page.setContent('<p-card></p-card>')

            // Force the prop to false explicitly via JS to avoid HTML boolean attribute coercion.
            await page.$eval(
                'p-card',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-card >>> .papier')

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
            await page.setContent('<p-card></p-card>')

            const darkInner = await page.find('p-card >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-card >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
