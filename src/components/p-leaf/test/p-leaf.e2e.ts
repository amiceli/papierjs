import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-leaf', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-leaf></p-leaf>')

        const element = await page.find('p-leaf')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-leaf', '.papier')
})
