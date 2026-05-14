import { newE2EPage } from '@stencil/core/testing'

describe('p-slider', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-slider></p-slider>')

        const element = await page.find('p-slider')
        expect(element).toHaveClass('hydrated')
    })
    it('define input min and max', async () => {
        const page = await newE2EPage()
        await page.setContent(`
            <p-slider 
                min="10" 
                max="100" 
            ></p-slider>
        `)
        const input = await page.find('p-slider >>> input')

        expect(input.getAttribute('max')).toEqual('100')
        expect(input.getAttribute('min')).toEqual('10')
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
            await page.setContent('<p-slider dark="true"></p-slider>')

            const inner = await page.find('p-slider >>> .papier')

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
            await page.setContent('<p-slider></p-slider>')

            await page.$eval(
                'p-slider',
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find('p-slider >>> .papier')

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
            await page.setContent('<p-slider></p-slider>')

            const darkInner = await page.find('p-slider >>> .papier')

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find('p-slider >>> .papier')

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
})
