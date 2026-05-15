import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-dropdown-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-dropdown-item value="x"></p-dropdown-item>')

        const element = await page.find('p-dropdown-item')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-dropdown-item', '>>> .papier', 'value="x"')
})
