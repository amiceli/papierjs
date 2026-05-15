import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-dropdown', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-dropdown></p-dropdown>')

        const element = await page.find('p-dropdown')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-dropdown', '>>> .papier')
})
