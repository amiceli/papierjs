import { newE2EPage } from '@stencil/core/testing'

describe('p-accordion', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-accordion tutle="test"></p-accordion>')

        const element = await page.find('p-accordion')
        expect(element).toHaveClass('hydrated')
    })
    it('should be close by default', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-accordion title="test">content</p-accordion>
        `)
        const summary = await page.find('p-accordion >>> .p-accordion__summary')
        const content = await page.find('p-accordion >>> .p-accordion__content')

        expect(summary.textContent).toContain('test')
        expect(content).not.toHaveClass('is--open')
    })
    it('can be open', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-accordion open title="test">content</p-accordion>
        `)
        const content = await page.find('p-accordion >>> .p-accordion__content')

        expect(content).toHaveClass('is--open')
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
            await page.setContent('<p-accordion dark="true" title="x"></p-accordion>')

            const inner = await page.find('p-accordion >>> .papier')

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
            await page.setContent('<p-accordion title="x"></p-accordion>')

            await page.$eval(
                'p-accordion',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-accordion >>> .papier')

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
            await page.setContent('<p-accordion title="x"></p-accordion>')

            const darkInner = await page.find('p-accordion >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-accordion >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
