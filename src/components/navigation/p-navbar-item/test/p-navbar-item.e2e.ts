import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-navbar-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-navbar-item></p-navbar-item>')

        const element = await page.find('p-navbar-item')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-navbar-item', '>>> .papier')
})
