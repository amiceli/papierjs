import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-breadcrumb', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-breadcrumb></p-breadcrumb>')

        const element = await page.find('p-breadcrumb')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-breadcrumb', '>>> .papier')
})
