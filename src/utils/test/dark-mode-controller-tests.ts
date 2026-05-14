import { newE2EPage } from '@stencil/core/testing'

/**
 * Shared E2E helper to test the DarkModeController integration on a component.
 *
 * @param tag         The custom element tag to test (e.g. `p-button`)
 * @param innerSelector The selector pointing to the element holding `is--dark`,
 *                    relative to the host. Use `>>> .papier` for shadow components,
 *                    or `.papier` for light-DOM components.
 * @param attrs       Optional extra attributes appended to opening tag.
 */
export function runDarkModeControllerTests(tag: string, innerSelector: string, attrs: string = '') {
    const open = (extra: string = '') => `<${tag}${attrs ? ` ${attrs}` : ''}${extra}></${tag}>`

    describe('dark mode controller', () => {
        it('applies is--dark when dark="true"', async () => {
            const page = await newE2EPage()
            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.setContent(open(' dark="true"'))

            const inner = await page.find(`${tag} ${innerSelector}`)

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
            await page.setContent(open())

            await page.$eval(
                tag,
                (
                    el: any & {
                        dark: boolean
                    },
                ) => {
                    el.dark = false
                },
            )
            await page.waitForChanges()

            const inner = await page.find(`${tag} ${innerSelector}`)

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
            await page.setContent(open())

            const darkInner = await page.find(`${tag} ${innerSelector}`)

            expect(darkInner).toHaveClass('is--dark')

            await page.emulateMediaFeatures([
                {
                    name: 'prefers-color-scheme',
                    value: 'light',
                },
            ])
            await page.waitForChanges()

            const lightInner = await page.find(`${tag} ${innerSelector}`)

            expect(lightInner).not.toHaveClass('is--dark')
        })
    })
}
