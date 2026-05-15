import { newE2EPage } from '@stencil/core/testing'
import { runDarkModeControllerTests } from '@/utils/test/dark-mode-controller-tests'

describe('p-sidebar-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<p-sidebar-item></p-sidebar-item>')

        const element = await page.find('p-sidebar-item')
        expect(element).toHaveClass('hydrated')
    })

    runDarkModeControllerTests('p-sidebar-item', '>>> .papier')
})
